import React from 'react';
import {StyleSheet, TouchableOpacity, Dimensions, View, Text, Image} from 'react-native';
import PropTypes from 'prop-types'

const WINDOW_WIDTH = Dimensions.get('window').width;

const SelectionArea = ({onSelectPress, selectedImages}) => {
  if (selectedImages.length === 0) {
    return (
      <TouchableOpacity
        style={style.wrapper}
        activeOpacity={0.8}
        onPress={onSelectPress}
      >
        <Text>
          Select images
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={{flex: 1, height: 500}}>
      {selectedImages.map(((image, index) => {
        console.log(image)
        return (
          <Image
            key={index}
            source={{uri: image.sourceURL}}
            resizeMode='cover'
            style={{width: 150, height: 150}}
          />
        )
      }))}
    </View>
  );
  
};

const style = StyleSheet.create({
  wrapper: {
    width: '100%',
    backgroundColor: '#1a2138',
    height: WINDOW_WIDTH - 20,
    borderWidth: 2,
    borderColor: '#101426',
    borderStyle: 'dashed',
    borderRadius: 10,
  },
});

SelectionArea.propTypes = {
  onSelectPress: PropTypes.func.isRequired,
};

export default SelectionArea;
