import React, {createContext, Component} from 'react';
import { UPLOAD_SCREEN } from '../utils/constants';

const AppContext = createContext();

class AppContextProvider extends Component {

  _setSelectedImages = (selectedImages: Array) => {
    this.setState({selectedImages});
  };

  _setShareUrl = (shareUrl: String) => {
    this.setState({shareUrl})
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

  state = {
    shareUrl: null,
    selectedImages: [],
    isUploading: false,
    activeScreen: UPLOAD_SCREEN,
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
      },
    };
  }

  render() {
    return (
      <AppContext.Provider value={this.getStore()}>
        {this.props.children}
      </AppContext.Provider>
    );
  }

}

export {AppContextProvider};

export const useAppContext = () => {
  return React.useContext(AppContext);
};
