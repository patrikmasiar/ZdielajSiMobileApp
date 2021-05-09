import {API_URL} from '../env';

export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const result = await response.json();

    if (result) {
      return result;
    }
  } catch (error) {
    console.log('Can not login user', error);
    return null;
  }
};

export const register = async (name, email, password) => {
  try {
    const response = await fetch(`${API_URL}user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const result = await response.json();

    console.log('register result', result);

    if (result) {
      return result;
    }
  } catch (error) {
    console.log('Can not register user', error);
    return null;
  }
};
