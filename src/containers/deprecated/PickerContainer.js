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
    removeImage,
  }} = useAppContext();

  const handleSelectionAreaPress = () => {
    try {
      ImagePicker.openPicker({
        multiple: true,
        path: 'images',
        mediaType: 'photo',
      }).then(media => {
        if (media) {
          setSelectedImages(media);
        } else {
          Alert.alert('Can not select images from library.', 'Please, try again.')
        }
      });      
    } catch (error) {
      console.log(error)
    }
  };

  const handleRemovePress = (image: Object) => {
    Alert.alert(
      'Vymazať obrázok z výberu?',
      '',
      [
        {
          text: "Nie",
          style: 'cancel',
        },
        { text: "Áno", onPress: () => removeImage(image), style: 'destructive' }
      ],
      {cancelable: false}
    );
  };

  return (
    <SelectionArea
      onSelectPress={handleSelectionAreaPress}
      selectedImages={selectedImages}
      onRemovePress={handleRemovePress}
    />
  )
};

export default PickerContainer;