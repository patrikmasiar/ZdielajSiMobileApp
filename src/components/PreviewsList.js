import React from 'react';
import {FlatList, View, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Button} from '@ui-kitten/components';

const Item = ({item, onRemovePress}) => (
  <View style={style.item}>
    <Image source={{uri: item.path}} resizeMode="cover" style={style.image} />
    <Button
      status="danger"
      size="tiny"
      appearance="outline"
      onPress={() => onRemovePress(item)}>
      Vymazať
    </Button>
  </View>
);

const PreviewsList = ({data, onRemovePress}) => (
  <FlatList
    data={data}
    renderItem={(item) => (
      <Item item={item.item} onRemovePress={onRemovePress} />
    )}
    keyExtractor={(item) => item.path}
    ItemSeparatorComponent={() => <View style={style.separator} />}
  />
);

const style = StyleSheet.create({
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
  separator: {
    height: 1,
    backgroundColor: '#8F9BB3',
    width: '100%',
  },
});

PreviewsList.propTypes = {
  data: PropTypes.array.isRequired,
  onRemovePress: PropTypes.func.isRequired,
};

export default PreviewsList;
