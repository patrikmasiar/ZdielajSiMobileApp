import {useState} from 'react';
import {register} from '../api/User';

const RegisterContainer = ({children, navigation}) => {
  const [isLoading, setLoading] = useState(false);

  const handleRegister = async (name, email, password) => {
    try {
      setLoading(true);
      const response = await register(name, email, password);

      if (response && !!response.data.user.id) {
        navigation.navigate('login');
      }
    } catch (e) {
      console.log('Error register user:', e);
    } finally {
      setLoading(false);
    }
  };

  return children({
    register: handleRegister,
    isLoading,
  });
};

export default RegisterContainer;
