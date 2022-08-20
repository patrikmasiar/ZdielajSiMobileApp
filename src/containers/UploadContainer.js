import {useState} from 'react';
import {useAppContext} from '../contextStore';
import RNFetchBlob from 'rn-fetch-blob';
import {Alert, Platform} from 'react-native';
import {API_UPLOAD_URL, CONFIG} from '../env';
import ApiRequests from '../api/apiRequests';

const UploadContainer = ({children, navigation}) => {
  const [isLoading, setLoading] = useState(false);
  const {
    state: {previews, isUserSigned},
    actions: {resetPreviews},
  } = useAppContext();

  const handleUploadImages = async () => {
    try {
      setLoading(true);

      const albumResponse = await ApiRequests.createAlbum();

      const headers = {
        'Content-Type': 'multipart/form-data',
        Authorization: albumResponse.data.user.token,
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

        const uploadResponse = await RNFetchBlob.fetch(
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
        const uploadResponseData = JSON.parse(uploadResponse.data);

        await ApiRequests.addMediaToAlbum(
          {
            albumId: albumResponse.data.album.id,
            mediaId: uploadResponseData.data.media.id,
          },
          albumResponse.data.user.token,
        );
      }

      navigation.navigate('share', {
        albumId: albumResponse.data.album.id,
      });
      resetPreviews();
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
