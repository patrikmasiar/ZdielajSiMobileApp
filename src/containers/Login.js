const LoginContainer = ({children}) => {
  const handleGoToRegister = () => {};

  const handleLogin = () => {};

  return children({
    goToRegister: handleGoToRegister,
    login: handleLogin,
  });
};

export default LoginContainer;
