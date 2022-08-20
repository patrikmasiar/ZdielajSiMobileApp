import {API_URL} from '../env';

export async function get(url, options) {
  return fetch(`${API_URL}${url}`, options).then((res) => res.json());
}

export async function post(url, options) {
  return fetch(`${API_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(options.data),
    ...options,
  }).then((res) => res.json());
}
