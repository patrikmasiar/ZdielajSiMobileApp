import React from 'react';
import {FlatList, View, Image, StyleSheet, Platform} from 'react-native';
import PropTypes from 'prop-types'
import { Button, } from '@ui-kitten/components';

const Item = ({item, onRemovePress}) => (
  <View style={style.item}>
    <Image
      source={{uri: Platform.OS === 'android' ? item.path : item.sourceURL}}
      resizeMode='cover'
      style={style.image}
    />
      <Button
        status='danger'
        size='tiny'
        appearance='outline'
        onPress={() => onRemovePress(item)}
      >
        Vymazať
    </Button>
  </View>
);

const PreviewsList = ({data, onRemovePress}) => (
  <FlatList
    data={data}
    renderItem={(item) => (
      <Item
        item={item.item}
        onRemovePress={onRemovePress}
      />
    )}
    keyExtractor={item => Platform.OS === 'android' ? item.path : item.sourceURL}
    ItemSeparatorComponent={() => <View
    style={{
      height: 1,
      backgroundColor: '#8F9BB3',
      width: '100%',
    }} />}
  />
);

const style = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12
  }
})

PreviewsList.propTypes = {
  data: PropTypes.array.isRequired,
  onRemovePress: PropTypes.func.isRequired,
};

export default PreviewsList;