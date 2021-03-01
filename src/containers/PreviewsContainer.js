import {useAppContext} from '../contextStore';
import ImagePicker from 'react-native-image-crop-picker';
import {Alert} from 'react-native';

const PreviewsContainer = ({children}) => {
  const {
    state: {previews},
    actions: {setPreviews},
  } = useAppContext();

  const handleAddNewMedia = async () => {
    try {
      const pickerResponse = await ImagePicker.openPicker({
        multiple: true,
        path: 'images',
        mediaType: 'photo',
      });

      if (Array.isArray(pickerResponse)) {
        setPreviews(pickerResponse);
      } else {
        Alert.alert(
          'Can not select images from library.',
          'Please, try again.',
        );
      }
    } catch (error) {
      // TODO
    }
  };

  return children({
    previews,
    onAddNew: handleAddNewMedia,
  });
};

export default PreviewsContainer;
