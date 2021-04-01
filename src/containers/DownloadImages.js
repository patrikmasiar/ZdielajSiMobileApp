import {useState} from 'react';
import {downloadImages as downloadFromAPI} from '../api/Download';

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

  return children({
    urlValue,
    onUrlChange: setUrlValue,
    downloadImages,
    images: imagesUrls,
  });
};

export default DownloadImages;
