import {register} from '../api/User';

const RegisterContainer = ({children}) => {
  const handleRegister = async (name, email, password) => {
    try {
      const response = await register(name, email, password);

      console.log('RESPONSE::', response);
    } catch (e) {
      console.log('Error register user:', e);
    }
  };

  return children({
    register: handleRegister,
  });
};

export default RegisterContainer;
