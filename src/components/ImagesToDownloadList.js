import React from 'react';
import {FlatList, StyleSheet, View, Image} from 'react-native';
import {Button} from '@ui-kitten/components';
import DownloadListEmptyMessage from './DownloadListEmptyMessage';

const Item = ({item, onDownloadPress}) => (
  <View style={style.item}>
    <Image
      source={{uri: item.thumbnail}}
      resizeMode="cover"
      style={style.image}
    />
    <Button
      status="info"
      appearance="outline"
      onPress={() => onDownloadPress(item.original)}>
      Stiahnuť
    </Button>
  </View>
);

const ImagesToDownloadList = ({data, onDownloadPress}) => {
  return (
    <FlatList
      data={data}
      style={style.list}
      renderItem={(item) => (
        <Item item={item.item} onDownloadPress={onDownloadPress} />
      )}
      keyExtractor={(item, index) => index.toString()}
      ListEmptyComponent={() => <DownloadListEmptyMessage />}
    />
  );
};

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

export default ImagesToDownloadList;
