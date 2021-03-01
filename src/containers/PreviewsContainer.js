import {useAppContext} from '../contextStore';

const PreviewsContainer = ({children}) => {
  const {
    state: {previews},
  } = useAppContext();

  const handleAddNewMedia = () => {};

  return children({
    previews,
    onAddNew: handleAddNewMedia,
  });
};

export default PreviewsContainer;
