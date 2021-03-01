import React, {useState} from 'react';

const UploadContainer = ({children}) => {
  const handleUploadImages = () => {};

  return children({
    onUpload: handleUploadImages,
  });
};

export default UploadContainer;
