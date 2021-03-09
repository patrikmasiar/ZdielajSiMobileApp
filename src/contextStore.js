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
        const previewsFileNames = previews.map((item) =>
          item.path.substring(item.path.lastIndexOf('/') + 1),
        );

        media.forEach((mediumItem) => {
          if (
            !previewsFileNames.includes(
              mediumItem.path.substring(mediumItem.path.lastIndexOf('/') + 1),
            )
          ) {
            previews.push(mediumItem);
          }

          // else do nothing
        });
      }

      return {
        ...prevState,
        previews,
      };
    });
  };

  const handleRemovePreview = (preview) => {
    setState((prevState) => {
      const previews = [...prevState.previews];

      const itemIndex = previews.findIndex((item) => {
        if (Platform.OS === 'ios') {
          return item.filename === preview.filename;
        }

        return (
          item.path.substring(item.path.lastIndexOf('/') + 1) ===
          preview.path.substring(preview.path.lastIndexOf('/') + 1)
        );
      });

      if (itemIndex !== -1) {
        previews.splice(itemIndex, 1);
      }

      return {
        ...prevState,
        previews,
      };
    });
  };

  const handleResetPreviews = () => {
    setState((prevState) => ({
      ...prevState,
      previews: [],
    }));
  };

  return (
    <AppContext.Provider
      value={{
        state,
        actions: {
          setPreviews: handleSetPreviews,
          removePreview: handleRemovePreview,
          resetPreviews: handleResetPreviews,
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
