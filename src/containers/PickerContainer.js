import React from 'react';
import {Alert} from 'react-native';
import Main from '../components/Main';
import SelectionArea from '../components/SelectionArea';
import ImagePicker from 'react-native-image-crop-picker';

const PickerContainer: () => React$Node = () => {

  const handleSelectionAreaPress = () => {
    try {
      ImagePicker.openPicker({
        multiple: true,
        path: 'images',
        mediaType: 'photo',
      }).then(media => {
        if (media) {
          //TODO
          console.log(media)
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
    />
  )
};

export default PickerContainer;
