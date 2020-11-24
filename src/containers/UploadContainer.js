import React from 'react';
import Main from '../components/Main';
import { useAppContext } from '../store';
import RNFetchBlob from 'rn-fetch-blob';
import {API_URL, BASE_URL} from '../env';
import { SHARE_SCREEN } from '../utils/constants';
import {Platform} from 'react-native';

const UploadContainer: () => React$Node = () => {
  const {state: {
    selectedImages,
    isUploading,
  }, actions: {
    setIsUploading,
    setShareUrl,
    navigateToScreen,
  }} = useAppContext();

  const handleUploadClick = async () => {
    let dataArray = [];
    for (image of selectedImages) {
      const androidFileName = Platform.OS === 'android' ? image.path.substring(image.path.lastIndexOf('/')+1) : '';

      dataArray.push({
        name: 'images',
        filename: Platform.OS === 'android' ? androidFileName : image.filename,
        type: image.mime,
        data: RNFetchBlob.wrap(Platform.OS === 'android' ? image.path : image.path.replace("file://", "")),
      });
    }

    try {
      setIsUploading(true);
      const response = await RNFetchBlob.fetch('POST', `${API_URL}upload`, {
        'Content-Type' : 'multipart/form-data',
      }, dataArray);
      setIsUploading(false);

      const responseData = JSON.parse(response.data);

      if (responseData.error === null && !!responseData.data) {
        setShareUrl(`${BASE_URL}album/${responseData.data.album.id}`);
        navigateToScreen(SHARE_SCREEN);
      }
    } catch (error) {
        console.log('Can not upload media', error);
    }
  };

  return (
    <Main
      onUploadPress={handleUploadClick}
      isLoading={isUploading}
      isUploadDisabled={selectedImages.length === 0}
    />
  )
};

export default UploadContainer;
