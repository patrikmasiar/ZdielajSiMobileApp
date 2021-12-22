import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Button} from '@ui-kitten/components';
import Video from 'react-native-video';

const PreviewsToUploadItem = ({item, onRemovePress}) => {
  if (item.mime.includes('video')) {
    console.log('som tu');

    return (
      <View style={style.item}>
        <View style={style.videoThumbWrapper}>
          <Video
            source={{uri: item.path}}
            style={style.video}
            repeat={false}
            paused={true}
          />
        </View>
        <Button
          status="danger"
          size="tiny"
          appearance="outline"
          onPress={() => onRemovePress(item)}>
          Vymazať
        </Button>
      </View>
    );
  }

  return (
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
};

const style = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  videoThumbWrapper: {
    width: 60,
    height: 60,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    overflow: 'hidden',
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
});

PreviewsToUploadItem.propTypes = {
  item: PropTypes.object.isRequired,
  onRemovePress: PropTypes.func.isRequired,
};

export default PreviewsToUploadItem;
