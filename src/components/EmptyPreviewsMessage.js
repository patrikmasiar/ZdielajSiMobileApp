import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const EmptyPreivewsMessage = () => (
  <View style={style.wrapper}>
    <Text style={style.message}>Nemáte vybrané žiadne obrázky na zieľanie</Text>
  </View>
);

const style = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  message: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: '#AFAFAF',
    lineHeight: 30,
  },
});

export default EmptyPreivewsMessage;
