import React, {useState} from 'react';
import {Alert, Clipboard} from 'react-native';
import Main from '../components/Main';
import { useAppContext } from '../store';
import RNFetchBlob from 'rn-fetch-blob';
import {API_URL, BASE_URL} from '../env';

const UploadContainer: () => React$Node = () => {
  const [shareUrl, setShareUrl] = useState(null);
  const {state: {
    selectedImages
  }} = useAppContext();

  const handleUploadClick = async () => {
    try {
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

      const responseData = JSON.parse(response.data);

      if (responseData.error === null && !!responseData.data) {
        setShareUrl(`${BASE_URL}album/${responseData.data.album.id}`);
        Clipboard.setString(`${BASE_URL}album/${responseData.data.album.id}`)
        Alert.alert('URL COPIED!');
      }
    } catch (error) {
        console.log('Can not upload media', error);
    }
  };

  return (
    <Main
      onUploadPress={handleUploadClick}
      shareUrl={shareUrl}
    />
  )
};

export default UploadContainer;
