import React from 'react';
import { Icon, TopNavigation, TopNavigationAction  } from '@ui-kitten/components';
import { Alert } from 'react-native';
import {useAppContext} from '../store';
import { UPLOAD_SCREEN } from '../utils/constants';

const HelpIcon = (props) => (
  <Icon {...props} name='question-mark-circle-outline'/>
);

const RepeatIcon = (props) => (
  <Icon {...props} name='refresh-outline'/>
);

const HelpIconAction = () => (
  <TopNavigationAction icon={HelpIcon}/>
);

const Navigation = () => {
  const {state: {
    shareUrl,
  }, actions: {
    navigateToScreen,
  }} = useAppContext();

  const handleResetPress = () => {
    Alert.alert(
      'Vrátiť sa na začiatok',
      'Želáte si vrátiť sa znovu na začiatok?',
      [
        {
          text: "Nie",
        },
        { text: "Áno", onPress: () => navigateToScreen(UPLOAD_SCREEN) }
      ],
      {cancelable: false}
    );
  };

  const renderRepeatAction = () => (
    <TopNavigationAction icon={RepeatIcon} onPress={handleResetPress} />
  )

  return (
    <TopNavigation
      alignment='center'
      title='zdielaj.si'
      accessoryLeft={HelpIconAction}
      accessoryRight={shareUrl !== null ? renderRepeatAction : () => null}
    />
  )
}

export default Navigation;
