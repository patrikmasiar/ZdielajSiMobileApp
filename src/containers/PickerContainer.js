import React from 'react';
import {Alert} from 'react-native';
import SelectionArea from '../components/SelectionArea';
import ImagePicker from 'react-native-image-crop-picker';
import { useAppContext } from '../store';

const PickerContainer: () => React$Node = () => {
  const {state: {
    selectedImages,
  }, actions: {
    setSelectedImages,
  }} = useAppContext();

  const handleSelectionAreaPress = () => {
    try {
      ImagePicker.openPicker({
        multiple: true,
        path: 'images',
        mediaType: 'photo',
      }).then(media => {
        if (media) {
          //TODO
          setSelectedImages(media);
        } else {
          Alert.alert('Can not select images from library.', 'Please, try again.')
        }
      });      
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <SelectionArea
      onSelectPress={handleSelectionAreaPress}
      selectedImages={selectedImages}
    />
  )
};

export default PickerContainer;