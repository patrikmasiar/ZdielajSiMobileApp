import React from 'react';
import {StyleSheet, TouchableOpacity, Dimensions, View, Text} from 'react-native';
import PropTypes from 'prop-types'
import { Icon } from '@ui-kitten/components';
import PreviewsList from './PreviewsList';

const WINDOW_WIDTH = Dimensions.get('window').width;

const SelectionArea: () => React$Node = ({onSelectPress, selectedImages, onRemovePress}) => {
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
          {hasImagesToUpload ? 'Vybrať viac obrázkov' : 'Vyber obrázky'}
        </Text>
      </TouchableOpacity>
      
      {hasImagesToUpload && (
        <PreviewsList
          data={selectedImages}
          onRemovePress={onRemovePress}
        />
      )}
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
    fontSize: 16,
    marginTop: 18,
  },
  icon: {
    width: 40,
    height: 40,
  },

});

SelectionArea.propTypes = {
  selectedImages: PropTypes.array.isRequired,
  onSelectPress: PropTypes.func.isRequired,
  onRemovePress: PropTypes.func.isRequired,
};

export default SelectionArea;
