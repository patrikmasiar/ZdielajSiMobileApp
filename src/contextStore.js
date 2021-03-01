import React, {createContext, useState} from 'react';

const AppContext = createContext({});

const AppContextProvider = ({children}) => {
  const [state, setState] = useState({
    previews: [],
  });

  const handleSetPreviews = (media) => {
    console.log('MEDIA::', media);
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
