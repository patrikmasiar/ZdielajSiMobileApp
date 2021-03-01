import React, {createContext, Component} from 'react';
import HelpModal from '../components/deprecated/HelpModal';
import {UPLOAD_SCREEN} from '../utils/constants';

const AppContext = createContext();

class AppContextProvider extends Component {
  _setSelectedImages = (images: Array) => {
    this.setState((prevState) => {
      const selectedImages = [...prevState.selectedImages];
      const incomingImages = [...images];
      const modificationDates = selectedImages.map(
        (item) => item.modificationDate,
      );

      incomingImages.forEach((item) => {
        if (!modificationDates.includes(item.modificationDate)) {
          selectedImages.push(item);
        }
      });

      return {selectedImages};
    });
  };

  _setShareUrl = (shareUrl: String) => {
    this.setState({shareUrl});
  };

  _setIsUploading = (isUploading: Boolean) => {
    this.setState({isUploading});
  };

  _resetAll = () => {
    this.setState(() => ({
      shareUrl: null,
      selectedImages: [],
    }));
  };

  _setActiveScreen = (screen: String) => {
    if (screen === UPLOAD_SCREEN) {
      this._resetAll();
    }

    this.setState(() => ({
      activeScreen: screen,
    }));
  };

  _removeImage = (image: Object) => {
    this.setState((prevState) => {
      const selectedImages = [...prevState.selectedImages];
      const itemIndex = selectedImages.findIndex(
        (item) => item.modificationDate === image.modificationDate,
      );

      if (itemIndex !== -1) {
        selectedImages.splice(itemIndex, 1);
      }

      return {selectedImages};
    });
  };

  _handleShowHelpModal = () => {
    this.setState({isHelpModalVisible: true});
  };

  _handleHideHelpModal = () => {
    this.setState({isHelpModalVisible: false});
  };

  state = {
    shareUrl: null,
    selectedImages: [],
    isUploading: false,
    activeScreen: UPLOAD_SCREEN,
    isHelpModalVisible: false,
  };

  getStore() {
    return {
      state: this.state,
      actions: {
        setSelectedImages: this._setSelectedImages,
        setShareUrl: this._setShareUrl,
        setIsUploading: this._setIsUploading,
        resetApp: this._resetAll,
        navigateToScreen: this._setActiveScreen,
        removeImage: this._removeImage,
        showHelpModal: this._handleShowHelpModal,
        hideHelpModal: this._handleHideHelpModal,
      },
    };
  }

  render() {
    return (
      <AppContext.Provider value={this.getStore()}>
        {this.props.children}
        <HelpModal
          isVisible={this.state.isHelpModalVisible}
          onHide={this._handleHideHelpModal}
        />
      </AppContext.Provider>
    );
  }
}

export {AppContextProvider};

export const useAppContext = () => {
  return React.useContext(AppContext);
};
