import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {Icon, Input} from '@ui-kitten/components';
import DownloadImagesContainer from '../containers/DownloadImages';
import ImagesToDownloadList from '../components/ImagesToDownloadList';

const DownloadImages = () => {
  return (
    <View style={style.wrapper}>
      <DownloadImagesContainer>
        {(params) => {
          const canDownload = params.urlValue.length !== 0;
          const renderIcon = (props) => (
            <TouchableWithoutFeedback
              style={[
                !canDownload
                  ? style.downloadButtonDisabled
                  : style.downloadButton,
              ]}
              onPress={params.downloadImages}>
              <Icon {...props} name="download" />
            </TouchableWithoutFeedback>
          );

          return (
            <>
              <Input
                value={params.urlValue}
                label="URL adresa albumu"
                placeholder="https://zdielaj.si/album/...."
                accessoryRight={renderIcon}
                autoCapitalize="none"
                onChangeText={(nextValue) => params.onUrlChange(nextValue)}
              />
              <ImagesToDownloadList
                data={params.images}
                onDownloadPress={params.downloadImage}
                isLoading={params.isLoading}
              />
            </>
          );
        }}
      </DownloadImagesContainer>
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
    padding: 20,
  },
  downloadButton: {
    opacity: 0.5,
  },
  downloadButtonDisabled: {
    opacity: 0.5,
  },
});

export default DownloadImages;
