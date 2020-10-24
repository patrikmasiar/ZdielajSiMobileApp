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
    try {
      setIsUploading(true);
      const response = await RNFetchBlob.fetch('POST', `${API_URL}upload`, {
        'Content-Type' : 'multipart/form-data',
      }, [
        {
          name: `images`,
          filename: selectedImages[0].filename,
          type: selectedImages[0].mime,
          data: RNFetchBlob.wrap(selectedImages[0].path.replace("file://", "")),
        },
      ]);
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
