import React from 'react';
import PropTypes from 'prop-types'
import UploadButton from './UploadButton';
import ShareButton from './ShareButton';

const Footer: () => React$Node = ({
  onUploadPress,
  isLoading,
  isUploadDisabled,
  shareUrl,
}) => {
  if (shareUrl !== null) {
    return (
      <ShareButton
        url={shareUrl}
      />
    )
  }

  return (
    <UploadButton
      onPress={onUploadPress}
      isLoading={isLoading}
      isDisabled={isUploadDisabled}
    />
  )
}


Footer.propTypes = {
  onUploadPress: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isUploadDisabled: PropTypes.bool.isRequired,
}

export default Footer;
