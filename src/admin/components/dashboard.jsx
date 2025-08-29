import React, { useEffect, useMemo, useState } from 'react';
import { ApiClient } from 'adminjs';
import { Box, H2, Text, Label, Loader } from '@adminjs/design-system';

const api = new ApiClient();

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState({
    usersCount: 0,
    serverTime: '',
    adminJSVersion: '',
  });

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await api.getDashboard();
        if (mounted) {
          const payload = res?.data || {};
          setData({
            usersCount: Number(payload.usersCount) || 0,
            serverTime: payload.serverTime || '',
            adminJSVersion: payload.adminJSVersion || '',
          });
          setLoading(false);
        }
      } catch (e) {
        if (mounted) {
          setError('Не удалось загрузить данные дашборда');
          setLoading(false);
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const serverTimeHuman = useMemo(() => {
    if (!data.serverTime) return '—';
    try {
      return new Date(data.serverTime).toLocaleString();
    } catch {
      return data.serverTime;
    }
  }, [data.serverTime]);

  return (
    <Box px="xl" py="lg">
      <Header />

      {loading ? (
        <LoaderBlock />
      ) : error ? (
        <ErrorPlaceholder text={error} />
      ) : (
        <>
          <CardsRow>
            <KpiCard
              title="Пользователи"
              value={formatNumber(data.usersCount)}
              hint="Всего в системе"
            />
            <KpiCard
              title="Время сервера"
              value={serverTimeHuman}
              hint="Синхронизировано"
            />
          </CardsRow>

          <Box
            mt="xl"
            display="grid"
            gridTemplateColumns="1fr 1fr"
            gridGap="xl"
            style={{ gap: 24 }}
          >
            <Panel title="Сведения о системе">
              <InfoRow label="Версия AdminJS" value={data.adminJSVersion} />
              <InfoRow label="Текущее время сервера" value={serverTimeHuman} />
            </Panel>
            <Panel title="Последние события">
              <Text variant="sm" color="grey60">
                Пока событий нет
              </Text>
            </Panel>
          </Box>
        </>
      )}
    </Box>
  );
}

function Header() {
  return (
    <Box mb="xl">
      <H2 marginBottom="xs" style={{ fontWeight: 600 }}>
        Панель управления
      </H2>
      <Text variant="sm" color="grey60">
        Краткое резюме ключевых показателей и состояния системы
      </Text>
    </Box>
  );
}

function CardsRow({ children }) {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fit, minmax(260px, 1fr))"
      gridGap="xl"
      style={{ gap: 24 }}
    >
      {children}
    </Box>
  );
}

function KpiCard({ title, value, hint }) {
  return (
    <Box
      variant="container"
      border
      rounded
      p="xl"
      style={{
        background: '#fff',
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
        transition: 'all 0.2s',
      }}
    >
      <Label>{title}</Label>
      <Text
        as="div"
        mt="md"
        style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.2 }}
      >
        {value}
      </Text>
      {hint ? (
        <Text
          variant="sm"
          mt="xs"
          color="grey60"
          style={{
            background: '#f8f9fa',
            borderRadius: 6,
            padding: '2px 6px',
            display: 'inline-block',
          }}
        >
          {hint}
        </Text>
      ) : null}
    </Box>
  );
}

function Panel({ title, children }) {
  return (
    <Box
      variant="container"
      border
      rounded
      p="xl"
      style={{
        background: '#fff',
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
      }}
    >
      <H2 marginBottom="md" style={{ fontSize: 18, fontWeight: 600 }}>
        {title}
      </H2>
      {children}
    </Box>
  );
}

function InfoRow({ label, value }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      py="sm"
      style={{ borderTop: '1px solid #f0f2f5' }}
    >
      <Text color="grey60">{label}</Text>
      <Text>{value}</Text>
    </Box>
  );
}

function LoaderBlock() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '240px' }}
    >
      <Loader />
    </Box>
  );
}

function ErrorPlaceholder({ text }) {
  return (
    <Box
      p="xl"
      style={{
        border: '1px solid #f5c2c7',
        background: '#f8d7da',
        borderRadius: 8,
      }}
    >
      <Text style={{ color: '#842029', fontWeight: 600 }}>{text}</Text>
    </Box>
  );
}

function formatNumber(n) {
  try {
    return new Intl.NumberFormat('ru-RU').format(Number(n) || 0);
  } catch {
    return String(n);
  }
}
