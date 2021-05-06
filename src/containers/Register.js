const RegisterContainer = ({children}) => {
  const handleRegister = (name, email, password) => {};

  return children({
    register: handleRegister,
  });
};

export default RegisterContainer;
