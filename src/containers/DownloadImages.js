import {useState} from 'react';

const DownloadImages = ({children}) => {
  const [urlValue, setUrlValue] = useState('');

  const downloadImages = () => {};

  return children({
    urlValue,
    onUrlChange: setUrlValue,
    downloadImages,
  });
};

export default DownloadImages;
