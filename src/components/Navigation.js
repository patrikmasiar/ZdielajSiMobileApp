import React from 'react';
import { Icon, TopNavigation, TopNavigationAction  } from '@ui-kitten/components';

const HelpIcon = (props) => (
  <Icon {...props} name='question-mark-circle-outline'/>
);

const RepeatIcon = (props) => (
  <Icon {...props} name='refresh-outline'/>
);

const renderHelpAction = () => (
  <TopNavigationAction icon={HelpIcon}/>
);

const renderRepeatAction = () => (
  <TopNavigationAction icon={RepeatIcon} />
)

const Navigation = () => {
  return (
    <TopNavigation
      alignment='center'
      title='zdielaj.si'
      accessoryLeft={renderHelpAction}
      accessoryRight={renderRepeatAction}
    />
  )
}

export default Navigation;
