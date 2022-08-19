import {API_URL} from '../env';

export const downloadImages = async (url: String) => {
  try {
    const regex = /([a-z\d]+)(\/*|)$/i;
    const albumId = url.match(regex)[0];

    const response = await fetch(`${API_URL}album/${albumId}`);
    const result = await response.json();

    if (result && result.error === null) {
      return result.data;
    }
  } catch (error) {
    console.log('Can download media', error);
    return null;
  }
};
