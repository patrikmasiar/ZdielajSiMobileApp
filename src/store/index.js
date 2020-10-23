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

  state = {
    selectedImages: [],
  };

  getStore() {
    return {
      state: this.state,
      actions: {
        setSelectedImages: this._setSelectedImages,
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
