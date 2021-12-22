import {useAppContext} from '../contextStore';
import ImagePicker from 'react-native-image-crop-picker';
import {Alert} from 'react-native';
import {CONFIG} from '../env';

const PreviewsContainer = ({children}) => {
  const {
    state: {previews, isUserSigned},
    actions: {setPreviews, removePreview},
  } = useAppContext();

  const handleAddNewMedia = async () => {
    try {
      const pickerResponse = await ImagePicker.openPicker({
        multiple: true,
        path: 'images',
        mediaType: isUserSigned
          ? CONFIG.ALLOWED_MEDIA_TYPES_SIGNED
          : CONFIG.ALLOWED_MEDIA_TYPES_NOT_SIGNED,
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
