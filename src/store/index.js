import React, {createContext, useContext, Component} from 'react';

const AppContext = createContext();

class AppContextProvider extends Component {

  _setSelectedImages = (selectedImages) => {
    if (Array.isArray(selectedImages)) {
      this.setState({selectedImages});
    } else {
      this.setState({selectedImages: []});
    }
  };

  _setShareUrl = (shareUrl) => {
    this.setState({shareUrl})
  };

  state = {
    shareUrl: null,
    selectedImages: [],
  };

  getStore() {
    return {
      state: this.state,
      actions: {
        setSelectedImages: this._setSelectedImages,
        setShareUrl: this._setShareUrl,
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
