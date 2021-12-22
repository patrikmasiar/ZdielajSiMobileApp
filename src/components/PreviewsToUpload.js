import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import EmptyPreivewsMessage from './EmptyPreviewsMessage';
import PreviewsToUploadItem from './previewsToUpload/PreviewsToUploadItem';

const PreviewsToUpload = ({data, onRemoveItem}) => (
  <FlatList
    data={data}
    style={style.list}
    renderItem={(item) => (
      <PreviewsToUploadItem item={item.item} onRemovePress={onRemoveItem} />
    )}
    keyExtractor={(item) => item.path}
    ListEmptyComponent={() => <EmptyPreivewsMessage />}
  />
);

const style = StyleSheet.create({
  list: {
    padding: 15,
  },
});

export default PreviewsToUpload;
