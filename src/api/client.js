import {API_URL} from '../env';

export async function get(url, options) {
  return fetch(`${API_URL}${url}`, options).then((res) => res.json());
}

export async function post(url, options) {
  let headers = {
    'Content-Type': 'application/json',
  };

  if (options?.headers) {
    headers = {
      ...headers,
      ...options.headers,
    };
  }

  return fetch(`${API_URL}${url}`, {
    method: 'POST',
    headers,
    body: options?.data ? JSON.stringify(options.data) : undefined,
    ...options,
  }).then((res) => res.json());
}
