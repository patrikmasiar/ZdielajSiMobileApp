export const downloadImages = async (url: String) => {
  try {
    const response = await fetch(url);

    console.log(response);
    // const response = await RNFetchBlob.fetch(
    //   'POST',
    //   `${API_URL}upload`,
    //   {
    //     'Content-Type': 'multipart/form-data',
    //   },
    //   data,
    // );

    // const responseData = JSON.parse(response.data);

    // if (responseData.error === null && !!responseData.data) {
    //   return responseData.data;
    // }
  } catch (error) {
    console.log('Can download media', error);
    return null;
  }
};
