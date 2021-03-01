import React from 'react';
import {FlatList, StyleSheet, View, Image} from 'react-native';
import EmptyPreivewsMessage from './EmptyPreviewsMessage';
import {Button} from '@ui-kitten/components';

const Item = ({item, onRemovePress}) => (
  <View style={style.item}>
    <Image source={{uri: item.path}} resizeMode="cover" style={style.image} />
    <Button
      status="danger"
      size="tiny"
      appearance="outline"
      onPress={() => null}>
      Vymazať
    </Button>
  </View>
);

const PreviewsToUpload = ({data}) => (
  <FlatList
    data={data}
    style={style.list}
    renderItem={(item) => <Item item={item.item} />}
    keyExtractor={(item) => item.path}
    ItemSeparatorComponent={() => <View style={style.separator} />}
    ListEmptyComponent={() => <EmptyPreivewsMessage />}
  />
);

const style = StyleSheet.create({
  list: {
    padding: 15,
  },
  separator: {
    height: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
});

export default PreviewsToUpload;
