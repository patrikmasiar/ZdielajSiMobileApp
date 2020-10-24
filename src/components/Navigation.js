import React from 'react';
import { Icon, TopNavigation, TopNavigationAction  } from '@ui-kitten/components';

const HelpIcon = (props) => (
  <Icon {...props} name='question-mark-circle-outline'/>
);

const RepeatIcon = (props) => (
  <Icon {...props} name='refresh-outline'/>
);

const Navigation = ({shareUrl, onResetApp}) => {
  const renderHelpAction = () => (
    <TopNavigationAction icon={HelpIcon}/>
  );

  const renderRepeatAction = () => (
    <TopNavigationAction icon={RepeatIcon} onPress={onResetApp} />
  )

  return (
    <TopNavigation
      alignment='center'
      title='zdielaj.si'
      accessoryLeft={renderHelpAction}
      accessoryRight={shareUrl !== null ? renderRepeatAction : () => null}
    />
  )
}

export default Navigation;
