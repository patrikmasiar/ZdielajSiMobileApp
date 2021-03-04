import {Share} from 'react-native';

const ShareContainer = ({children}) => {
  const handleSharePress = async (url) => {
    try {
      const result = await Share.share({
        message: url,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (e) {
      // TODO
    }
  };

  return children({
    onShare: handleSharePress,
  });
};

export default ShareContainer;
