import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Text} from '@ui-kitten/components';
import {BASE_URL} from '../env';
import ShareButton from '../components/ShareButtton';
import ShareContainer from '../containers/ShareContainer';

const Share = ({route}) => (
  <ShareContainer>
    {(params) => (
      <View style={style.wrapper}>
        <Card style={style.card} status="basic">
          <Text style={style.link}>
            {`${BASE_URL}album/${route.params.albumId}`}
          </Text>
        </Card>
        <View style={style.infoWrapper}>
          <Text style={style.info}>
            Link bude platný 24 hodín. Fotky budú po 24 hodinách automaticky
            zmazané
          </Text>
        </View>
        <ShareButton
          onPress={() =>
            params.onShare(`${BASE_URL}album/${route.params.albumId}`)
          }
        />
      </View>
    )}
  </ShareContainer>
);

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
    padding: 20,
  },
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

export default Share;
