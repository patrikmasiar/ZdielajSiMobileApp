import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Card, Text } from '@ui-kitten/components';


const ShareScreen = ({shareUrl}) => (
  <View>
    <Card style={style.card} status='basic'>
      <Text>
        {shareUrl}
      </Text>
    </Card>
  </View>
);

const style = StyleSheet.create({
  card: {
    marginBottom: 10
  }
})

export default ShareScreen;
