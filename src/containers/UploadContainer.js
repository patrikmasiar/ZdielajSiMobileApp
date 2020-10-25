import React from 'react';
import Main from '../components/Main';
import { useAppContext } from '../store';
import RNFetchBlob from 'rn-fetch-blob';
import {API_URL, BASE_URL} from '../env';

const UploadContainer: () => React$Node = () => {
  const {state: {
    selectedImages,
    isUploading,
    shareUrl,
  }, actions: {
    setIsUploading,
    resetApp,
    setShareUrl,
  }} = useAppContext();

  const handleUploadClick = async () => {
    let dataArray = [];
    for (image of selectedImages) {
      dataArray.push({
        name: 'images',
        filename: image.filename,
        type: image.mime,
        data: RNFetchBlob.wrap(image.path.replace("file://", "")),
      });
    }

    try {
      setIsUploading(true);
      const response = await RNFetchBlob.fetch('POST', `${API_URL}upload`, {
        'Content-Type' : 'multipart/form-data',
      },dataArray);
      setIsUploading(false);

      const responseData = JSON.parse(response.data);

      if (responseData.error === null && !!responseData.data) {
        setShareUrl(`${BASE_URL}album/${responseData.data.album.id}`);
      }
    } catch (error) {
        console.log('Can not upload media', error);
    }
  };

  return (
    <Main
      onUploadPress={handleUploadClick}
      shareUrl={shareUrl}
      isLoading={isUploading}
      isUploadDisabled={selectedImages.length === 0}
      onResetApp={resetApp}
    />
  )
};

export default UploadContainer;
