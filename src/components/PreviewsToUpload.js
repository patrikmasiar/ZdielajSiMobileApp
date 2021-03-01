import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import EmptyPreivewsMessage from './EmptyPreviewsMessage';

const PreviewsToUpload = ({data}) => (
  <FlatList
    data={data}
    style={style.list}
    renderItem={(item) => null}
    keyExtractor={(item) => item.path}
    ItemSeparatorComponent={() => <View style={style.separator} />}
    ListEmptyComponent={() => <EmptyPreivewsMessage />}
  />
);

const style = StyleSheet.create({
  list: {},
  separator: {
    height: 2,
    backgroundColor: '#fff',
    width: '100%',
  },
});

export default PreviewsToUpload;
