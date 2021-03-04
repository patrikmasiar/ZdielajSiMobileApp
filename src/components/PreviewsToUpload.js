import React from 'react';
import {FlatList, StyleSheet, View, Image} from 'react-native';
import EmptyPreivewsMessage from './EmptyPreviewsMessage';
import {Button} from '@ui-kitten/components';

const Item = ({item, onRemovePress}) => (
  <View style={style.item}>
    <Image source={{uri: item.path}} resizeMode="cover" style={style.image} />
    <Button
      status="danger"
      appearance="outline"
      onPress={() => onRemovePress(item)}>
      Vymazať
    </Button>
  </View>
);

const PreviewsToUpload = ({data, onRemoveItem}) => (
  <FlatList
    data={data}
    style={style.list}
    renderItem={(item) => (
      <Item item={item.item} onRemovePress={onRemoveItem} />
    )}
    keyExtractor={(item) => item.path}
    ListEmptyComponent={() => <EmptyPreivewsMessage />}
  />
);

const style = StyleSheet.create({
  list: {
    padding: 15,
  },
  image: {
    width: 120,
    height: 70,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default PreviewsToUpload;