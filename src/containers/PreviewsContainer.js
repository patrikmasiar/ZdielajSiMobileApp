import {useAppContext} from '../contextStore';
import ImagePicker from 'react-native-image-crop-picker';
import {Alert} from 'react-native';

const PreviewsContainer = ({children}) => {
  const {
    state: {previews},
    actions: {setPreviews, removePreview},
  } = useAppContext();

  const handleAddNewMedia = async () => {
    try {
      const pickerResponse = await ImagePicker.openPicker({
        multiple: true,
        path: 'images',
        mediaType: 'any',
      });

      if (Array.isArray(pickerResponse)) {
        setPreviews(pickerResponse);
      } else {
        Alert.alert(
          'Nepodarilo sa nahrať médiá z knižnice',
          'Prosím, skúste znovu',
        );
      }
    } catch (error) {
      // TODO
    }
  };

  const handleRemoveItem = (item) => {
    Alert.alert(
      'Vymazať položku zo zoznamu?',
      '',
      [
        {
          text: 'Nie',
        },
        {text: 'Áno', onPress: () => removePreview(item)},
      ],
      {cancelable: false},
    );
  };

  return children({
    previews,
    onAddNew: handleAddNewMedia,
    onRemoveItem: handleRemoveItem,
  });
};

export default PreviewsContainer;
