import React from 'react';
import PropTypes from 'prop-types'
import UploadButton from './UploadButton';

const Footer: () => React$Node = ({
  onUploadPress,
  isLoading,
  isUploadDisabled,
}) => (
  <UploadButton
    onPress={onUploadPress}
    isLoading={isLoading}
    isDisabled={isUploadDisabled}
  />
);

Footer.propTypes = {
  onUploadPress: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isUploadDisabled: PropTypes.bool.isRequired,
}

export default Footer;
