import {useState} from 'react';
import CameraRoll from '@react-native-community/cameraroll';
import RNFetchBlob from 'rn-fetch-blob';
import {Platform, Alert} from 'react-native';
import getPermissionAndroid from '../utils/getAndroidPermissions';
import ApiRequests from '../api/apiRequests';

const ALBUM_ID_URL_REGEX = /([a-z\d]+)(\/*|)$/i;

const DownloadImages = ({children}) => {
  const [isLoading, setLoading] = useState(false);
  const [urlValue, setUrlValue] = useState('');
  const [imagesUrls, setImagesUrls] = useState([]);

  const downloadImages = async () => {
    try {
      setLoading(true);
      const albumId = urlValue.match(ALBUM_ID_URL_REGEX)[0];
      const data = await ApiRequests.getAlbumData(albumId);

      if (data.data) {
        const images = data.data.album.media;
        const formatted = images.map((image) => ({
          thumbnail: image.thumbnails[0].location,
          original: image.location,
        }));

        setImagesUrls(formatted);
      }
    } catch (e) {
      // TODO
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = async (originalSrc: String) => {
    if (Platform.OS === 'android') {
      const granted = await getPermissionAndroid();
      if (!granted) {
        return;
      }
    }

    RNFetchBlob.config({
      fileCache: true,
    })
      .fetch('GET', originalSrc)
      .then((response) => {
        CameraRoll.saveToCameraRoll(response.data, 'photo')
          .then(() => Alert.alert('Obrázok stiahnutý'))
          .catch((err) => {
            console.log(err);
            Alert.alert('Obrázok sa nepodarilo uložiť');
          });
      })
      .catch((err) => console.log(err));
  };

  return children({
    urlValue,
    onUrlChange: setUrlValue,
    downloadImages,
    images: imagesUrls,
    downloadImage,
    isLoading,
  });
};

export default DownloadImages;
