import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Icon, Spinner} from '@ui-kitten/components';
import UploadContainer from '../containers/UploadContainer';

const UploadHeaderButton = ({navigation}) => {
  return (
    <UploadContainer navigation={navigation}>
      {(params) => (
        <TouchableOpacity
          disabled={!params.canUpload}
          style={[style.button, !params.canUpload && style.disabled]}
          onPress={params.onUpload}>
          {params.isLoading ? (
            <View style={style.indicator}>
              <Spinner size="small" status="primary" />
            </View>
          ) : (
            <Icon fill="#3255AF" name="upload" style={style.icon} />
          )}
        </TouchableOpacity>
      )}
    </UploadContainer>
  );
};

const style = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
  },
  disabled: {
    opacity: 0.5,
  },
  icon: {
    width: 30,
    height: 30,
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
  },
});

export default UploadHeaderButton;
