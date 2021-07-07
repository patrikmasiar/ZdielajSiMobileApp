import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Text} from '@ui-kitten/components';

const ShareScreen = ({shareUrl}) => (
  <View>
    <Card style={style.card} status="basic">
      <Text style={style.link}>{shareUrl}</Text>
    </Card>
    <View style={style.infoWrapper}>
      <Text style={style.info}>
        Link bude platný 24 hodín. Fotky budú po 24 hodinách automaticky zmazané
      </Text>
    </View>
  </View>
);

const style = StyleSheet.create({
  card: {
    marginBottom: 10,
  },
  link: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  infoWrapper: {
    marginTop: 10,
  },
  info: {
    fontSize: 13,
    fontWeight: '100',
  },
});

export default ShareScreen;
