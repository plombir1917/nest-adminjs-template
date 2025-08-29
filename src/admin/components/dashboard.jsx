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
    users: [],
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
            users: Array.isArray(payload.users) ? payload.users : [],
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

  // --- Подготовка данных для графика ---
  const chartData = useMemo(() => {
    if (!data.users.length) return [];
    const grouped = {};
    data.users.forEach((u) => {
      if (!u.createdAt) return;
      const d = new Date(u.createdAt);
      const key = d.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
      grouped[key] = (grouped[key] || 0) + 1;
    });
    return Object.entries(grouped)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  }, [data.users]);

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
            <KpiCard title="Кастомный блок" value="Сосал?" hint="Да" />
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

            <Panel title="Регистрация пользователей">
              {chartData.length === 0 ? (
                <Text variant="sm" color="grey60">
                  Нет данных для отображения
                </Text>
              ) : (
                <LineChart data={chartData} />
              )}
            </Panel>
          </Box>
        </>
      )}
    </Box>
  );
}

function LineChart({ data }) {
  const width = 400;
  const height = 250;
  const padding = 30;

  const maxY = Math.max(...data.map((d) => d.count), 1);
  const points = data.map((d, i) => {
    const x = padding + (i / (data.length - 1)) * (width - padding * 2);
    const y = height - padding - (d.count / maxY) * (height - padding * 2);
    return { x, y, label: d.date, value: d.count };
  });

  const pathD = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`)
    .join(' ');

  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
      {/* Сетка */}
      <line
        x1={padding}
        y1={height - padding}
        x2={width - padding}
        y2={height - padding}
        stroke="#ccc"
      />
      <line
        x1={padding}
        y1={padding}
        x2={padding}
        y2={height - padding}
        stroke="#ccc"
      />

      {/* Линия графика */}
      <path d={pathD} fill="none" stroke="#4f46e5" strokeWidth="2" />

      {/* Точки */}
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="4" fill="#4f46e5" />
      ))}

      {/* Подписи по оси X */}
      {points.map((p, i) => (
        <text
          key={i}
          x={p.x}
          y={height - padding + 15}
          fontSize="10"
          textAnchor="middle"
          fill="#666"
        >
          {p.label}
        </text>
      ))}

      {/* Подпись по оси Y (макс значение) */}
      <text x={5} y={padding} fontSize="10" fill="#666">
        {maxY}
      </text>
      <text x={5} y={height - padding} fontSize="10" fill="#666">
        0
      </text>
    </svg>
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
