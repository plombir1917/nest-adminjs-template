import React, { useEffect, useMemo, useState } from 'react';
import { ApiClient } from 'adminjs';
import { Box, H2, Text, Label } from '@adminjs/design-system';

const api = new ApiClient();

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState({ usersCount: 0, serverTime: '' });

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
        <Placeholder text="Загрузка данных…" />
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
              <InfoRow label="Версия Admin панели" value={getAppVersion()} />
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
    <Box mb="lg">
      <H2 marginBottom="xs">Панель управления</H2>
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
      gridTemplateColumns="repeat(auto-fit, minmax(240px, 1fr))"
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
      p="lg"
      style={{ background: '#fff' }}
    >
      <Label>{title}</Label>
      <Text as="div" mt="sm" style={{ fontSize: 28, fontWeight: 700 }}>
        {value}
      </Text>
      {hint ? (
        <Text variant="sm" color="grey60">
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
      p="lg"
      style={{ background: '#fff' }}
    >
      <H2 marginBottom="md" style={{ fontSize: 18 }}>
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

function Placeholder({ text }) {
  return (
    <Box p="lg">
      <Text>{text}</Text>
    </Box>
  );
}

function ErrorPlaceholder({ text }) {
  return (
    <Box p="lg">
      <Text style={{ color: 'crimson' }}>{text}</Text>
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

function getAppVersion() {
  // при необходимости — подхват версии из env/конфига
  return 'v0.0.1';
}
