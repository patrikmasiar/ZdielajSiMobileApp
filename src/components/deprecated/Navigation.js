import React from 'react';
import {Icon, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import {Alert} from 'react-native';
import {useAppContext} from '../../store';
import {UPLOAD_SCREEN} from '../../utils/constants';

const HelpIcon = (props) => (
  <Icon {...props} name="question-mark-circle-outline" />
);

const RepeatIcon = (props) => <Icon {...props} name="refresh-outline" />;

const Navigation = () => {
  const {
    state: {shareUrl},
    actions: {navigateToScreen, showHelpModal},
  } = useAppContext();

  const handleResetPress = () => {
    Alert.alert(
      'Vrátiť sa na začiatok',
      'Želáte si vrátiť sa znovu na začiatok?',
      [
        {
          text: 'Nie',
        },
        {text: 'Áno', onPress: () => navigateToScreen(UPLOAD_SCREEN)},
        ,
      ],
      {cancelable: false},
    );
  };

  const handleOnHelpPress = () => {
    showHelpModal();
  };

  const renderRepeatAction = () => (
    <TopNavigationAction icon={RepeatIcon} onPress={handleResetPress} />
  );

  const renderHelpAction = () => (
    <TopNavigationAction icon={HelpIcon} onPress={handleOnHelpPress} />
  );

  return (
    <TopNavigation
      alignment="center"
      title="zdielaj.si"
      accessoryLeft={renderHelpAction}
      accessoryRight={shareUrl !== null ? renderRepeatAction : () => null}
    />
  );
};

export default Navigation;
