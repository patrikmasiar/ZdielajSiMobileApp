import {API_URL} from '../env';
import RNFetchBlob from 'rn-fetch-blob';

export const uploadImages = async (data: Array) => {
  try {
    const response = await RNFetchBlob.fetch(
      'POST',
      `${API_URL}upload`,
      {
        'Content-Type': 'multipart/form-data',
      },
      data,
    );

    const responseData = JSON.parse(response.data);

    if (responseData.error === null && !!responseData.data) {
      return responseData.data;
    }
  } catch (error) {
    console.log('Can not upload media', error);
    return null;
  }
};
