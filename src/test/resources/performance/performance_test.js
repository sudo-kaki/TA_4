import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '20s', target: 20 },
    { duration: '5s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'], // Latencia < 2000ms
    http_req_failed: ['rate<0.01'],   // Tasa de error < 1%
  },
};

export default function () {
  const url = 'https://httpbin.org/post';
  const payload = JSON.stringify({ user: 'admin', pass: 'clave123' });
  const params = { headers: { 'Content-Type': 'application/json' } };

  const res = http.post(url, payload, params);

  check(res, {
    'status es 200': (r) => r.status === 200,
  });

  sleep(1);
}