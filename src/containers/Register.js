import {useState} from 'react';
import {register} from '../api/User';

const RegisterContainer = ({children}) => {
  const [isLoading, setLoading] = useState(false);

  const handleRegister = async (name, email, password) => {
    try {
      setLoading(true);
      const response = await register(name, email, password);

      console.log('RESPONSE::', response);
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
