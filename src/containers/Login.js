const LoginContainer = ({children, navigation}) => {
  const handleGoToRegister = () => {
    navigation.navigate('registration');
  };

  const handleLogin = () => {};

  return children({
    goToRegister: handleGoToRegister,
    login: handleLogin,
  });
};

export default LoginContainer;
