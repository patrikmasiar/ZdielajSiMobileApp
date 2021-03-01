import {useAppContext} from '../contextStore';

const PreviewsContainer = ({children}) => {
  const {
    state: {previews},
  } = useAppContext();

  return children({
    previews,
  });
};

export default PreviewsContainer;
