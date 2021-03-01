import React, {createContext, useState} from 'react';
import {Platform} from 'react-native';

const AppContext = createContext({});

const AppContextProvider = ({children}) => {
  const [state, setState] = useState({
    previews: [],
  });

  const handleSetPreviews = (media) => {
    setState((prevState) => {
      const previews = [...prevState.previews];

      if (Platform.OS === 'ios') {
        const previewsFileNames = previews.map((item) => item.filename);

        media.forEach((mediumItem) => {
          if (!previewsFileNames.includes(mediumItem.filename)) {
            previews.push(mediumItem);
          }

          // else do nothing
        });
      } else {
        //TODO: android
      }

      return {
        ...prevState,
        previews: previews,
      };
    });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        actions: {
          setPreviews: handleSetPreviews,
        },
      }}>
      {children}
    </AppContext.Provider>
  );
};

export {AppContextProvider};

export const useAppContext = () => {
  return React.useContext(AppContext);
};
