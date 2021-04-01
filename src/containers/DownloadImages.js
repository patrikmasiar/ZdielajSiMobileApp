import {useState} from 'react';
import CameraRoll from '@react-native-community/cameraroll';
import RNFetchBlob from 'rn-fetch-blob';
import {Platform} from 'react-native';
import {downloadImages as downloadFromAPI} from '../api/Download';
import getPermissionAndroid from '../utils/getAndroidPermissions';

const DownloadImages = ({children}) => {
  const [urlValue, setUrlValue] = useState('');
  const [imagesUrls, setImagesUrls] = useState([]);

  const downloadImages = async () => {
    const data = await downloadFromAPI(urlValue);

    if (data) {
      const images = data.photos;
      const formatted = images.map((image) => ({
        thumbnail: image.thumbnail.location,
        original: image.location,
      }));

      setImagesUrls(formatted);
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
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return children({
    urlValue,
    onUrlChange: setUrlValue,
    downloadImages,
    images: imagesUrls,
    downloadImage,
  });
};

export default DownloadImages;
