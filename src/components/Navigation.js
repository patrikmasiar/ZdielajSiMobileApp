import React from 'react';
import { Icon, TopNavigation, TopNavigationAction  } from '@ui-kitten/components';
import { Alert } from 'react-native';

const HelpIcon = (props) => (
  <Icon {...props} name='question-mark-circle-outline'/>
);

const RepeatIcon = (props) => (
  <Icon {...props} name='refresh-outline'/>
);

const Navigation = ({canReset, onResetApp}) => {
  const renderHelpAction = () => (
    <TopNavigationAction icon={HelpIcon}/>
  );

  const handleResetPress = () => {
    Alert.alert(
      'Vrátiť sa na začiatok',
      'Želáte si vrátiť sa znovu na začiatok?',
      [
        {
          text: "Nie",
        },
        { text: "Áno", onPress: () => onResetApp() }
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
      accessoryLeft={renderHelpAction}
      accessoryRight={canReset ? renderRepeatAction : () => null}
    />
  )
}

export default Navigation;
