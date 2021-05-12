import {useState} from 'react';
import {useAppContext} from '../contextStore';
import RNFetchBlob from 'rn-fetch-blob';
import {Alert, Platform} from 'react-native';
import {API_URL} from '../env';

const UploadContainer = ({children, navigation}) => {
  const [isLoading, setLoading] = useState(false);
  const {
    state: {previews, user},
    actions: {resetPreviews},
  } = useAppContext();

  const handleUploadImages = async () => {
    try {
      setLoading(true);
      let dataArray = [];
      let headers = {
        'Content-Type': 'multipart/form-data',
      };
      const userToken = user?.token ?? null;

      if (previews.length > 10 && userToken === null) {
        Alert.alert(
          'Nemožno nahrať viac ako 10 médií',
          'Vyžaduje sa prihlásenie',
        );
        return;
      }

      for (const image of previews) {
        const fileNameByPlatform =
          Platform.OS === 'android'
            ? image.path.substring(image.path.lastIndexOf('/') + 1)
            : image.filename;

        dataArray.push({
          name: 'images',
          filename: fileNameByPlatform,
          type: image.mime,
          data: RNFetchBlob.wrap(
            Platform.OS === 'android'
              ? image.path
              : image.path.replace('file://', ''),
          ),
        });
      }

      if (userToken) {
        headers.Authorization = user.token;
      }

      const response = await RNFetchBlob.fetch(
        'POST',
        `${API_URL}upload`,
        {...headers},
        dataArray,
      );

      const responseData = JSON.parse(response.data);

      if (responseData.error === null && !!responseData.data) {
        navigation.navigate('share', {
          albumId: responseData.data.album.id,
        });
        resetPreviews();
      }
    } catch (error) {
      console.log('Can not upload media', error);
    } finally {
      setLoading(false);
    }
  };

  return children({
    onUpload: handleUploadImages,
    isLoading,
    canUpload: previews.length !== 0,
  });
};

export default UploadContainer;
