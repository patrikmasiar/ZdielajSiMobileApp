import {useState} from 'react';
import {downloadImages as downloadFromAPI} from '../api/Download';

const DownloadImages = ({children}) => {
  const [urlValue, setUrlValue] = useState('');

  const downloadImages = async () => {
    downloadFromAPI(urlValue);
  };

  return children({
    urlValue,
    onUrlChange: setUrlValue,
    downloadImages,
  });
};

export default DownloadImages;
