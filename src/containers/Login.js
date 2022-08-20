import {useState} from 'react';
import {useAppContext} from '../contextStore';
import ApiRequests from '../api/apiRequests';

const LoginContainer = ({children, navigation}) => {
  const [isLoading, setLoading] = useState(false);
  const {
    actions: {setUser},
  } = useAppContext();

  const handleGoToRegister = () => {
    navigation.navigate('registration');
  };

  const handleLogin = async (email, password) => {
    try {
      setLoading(true);
      const response = await ApiRequests.login({email, password});

      if (response && !!response.data.user.id) {
        setUser(response.data.user);
      }
    } catch (e) {
      console.log('Error login user:', e);
    } finally {
      setLoading(false);
    }
  };

  return children({
    goToRegister: handleGoToRegister,
    login: handleLogin,
    isLoading,
  });
};

export default LoginContainer;
