import {useState} from 'react';
import {useAppContext} from '../contextStore';
import RNFetchBlob from 'rn-fetch-blob';
import {Alert, Platform} from 'react-native';
import {API_UPLOAD_URL, API_URL, CONFIG} from '../env';

const UploadContainer = ({children, navigation}) => {
  const [isLoading, setLoading] = useState(false);
  const {
    state: {previews, isUserSigned},
    actions: {resetPreviews},
  } = useAppContext();

  const handleUploadImages = async () => {
    try {
      setLoading(true);

      const albumResponse = await fetch(`${API_URL}album`, {
        method: 'POST',
      });
      const albumResult = await albumResponse.json();

      const headers = {
        'content-type': 'multipart/form-data',
        authorization: albumResult.data.user.token,
      };

      if (
        previews.length > CONFIG.NOT_SIGNED_MEDIA_UPLOAD_LIMIT &&
        isUserSigned
      ) {
        Alert.alert(
          `Nemožno nahrať viac ako ${CONFIG.NOT_SIGNED_MEDIA_UPLOAD_LIMIT} médií`,
          'Vyžaduje sa prihlásenie',
        );
        return;
      }

      for (const image of previews) {
        const fileNameByPlatform =
          Platform.OS === 'android'
            ? image.path.substring(image.path.lastIndexOf('/') + 1)
            : image.filename;

        await RNFetchBlob.fetch(
          'POST',
          `${API_UPLOAD_URL}upload`,
          {...headers},
          [
            {
              name: 'image',
              filename: fileNameByPlatform,
              type: image.mime,
              data: RNFetchBlob.wrap(
                Platform.OS === 'android'
                  ? image.path
                  : image.path.replace('file://', ''),
              ),
            },
          ],
        );

        navigation.navigate('share', {
          albumId: albumResult.data.album.id,
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
