import React from 'react';
import {StyleSheet, TouchableOpacity, Dimensions, View, Text, Image} from 'react-native';
import PropTypes from 'prop-types'
import { Icon } from '@ui-kitten/components';

const WINDOW_WIDTH = Dimensions.get('window').width;

const SelectionArea: () => React$Node = ({onSelectPress, selectedImages}) => {
  const hasImagesToUpload = selectedImages.length !== 0;

  return (
    <View>
      <TouchableOpacity
        style={[
          style.selectionWrapper,
          {height: hasImagesToUpload ? 120 : WINDOW_WIDTH - 20},
          hasImagesToUpload && {marginBottom: 20},
        ]}
        activeOpacity={0.8}
        onPress={onSelectPress}
      >
        <Icon
          style={style.icon}
          fill='#8F9BB3'
          name='image'
        />
        <Text style={style.selectLabel}>
          Select images
        </Text>
      </TouchableOpacity>

      <View>
        {selectedImages.map(((image, index) => {
          return (
            <Image
              key={index}
              source={{uri: image.sourceURL}}
              resizeMode='cover'
              style={style.image}
            />
          )
        }))}
      </View>
    </View>
  )  
};

const style = StyleSheet.create({
  selectionWrapper: {
    width: '100%',
    backgroundColor: '#1a2138',
    borderWidth: 2,
    borderColor: '#8F9BB3',
    borderStyle: 'dashed',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectLabel: {
    color: '#8F9BB3',
    fontSize: 18,
    marginTop: 20,
  },
  icon: {
    width: 40,
    height: 40,
  },
  image: {
    width: WINDOW_WIDTH / 3,
    heigth: WINDOW_WIDTH / 3,
  }
});

SelectionArea.propTypes = {
  onSelectPress: PropTypes.func.isRequired,
};

export default SelectionArea;
