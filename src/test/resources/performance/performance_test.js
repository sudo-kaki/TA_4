import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m', target: 20 },
    { duration: '10s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% de solicitudes < 500ms
    http_req_failed: ['rate<0.01'],   // Tasa de error < 1%
  },
};

export default function () {
  const res = http.post('https://api.ejemplo.com/login', {
    user: 'admin',
    pass: 'clave123',
  });
  
  check(res, { 'status es 200': (r) => r.status === 200 });
  sleep(1);
}
