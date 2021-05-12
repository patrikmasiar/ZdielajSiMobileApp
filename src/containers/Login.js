import {useState} from 'react';
import {login} from '../api/User';
import {useAppContext} from '../contextStore';

const LoginContainer = ({children, navigation}) => {
  const [isLoading, setLoading] = useState(false);
  const {
    actions: {setUserToken},
  } = useAppContext();

  const handleGoToRegister = () => {
    navigation.navigate('registration');
  };

  const handleLogin = async (email, password) => {
    try {
      setLoading(true);
      const response = await login(email, password);

      if (response && !!response.data.user.id) {
        setUserToken(response.data.user.token);
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
