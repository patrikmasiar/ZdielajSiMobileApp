import React from 'react';
import Main from '../components/Main';
import { useAppContext } from '../store';

const UploadContainer: () => React$Node = () => {
  const {state: {
    selectedImages
  }} = useAppContext();

  const handleUploadClick = () => {
    console.log(selectedImages)
  };

  return (
    <Main
      onUploadPress={handleUploadClick}
    />
  )
};

export default UploadContainer;
