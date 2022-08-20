import {API_URL} from '../env';

export async function get(url, options) {
  return fetch(`${API_URL}${url}`, options).then((res) => res.json());
}

export async function post(url, options) {
  return fetch(`${API_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    body: options?.data ? JSON.stringify(options.data) : undefined,
  }).then((res) => res.json());
}
