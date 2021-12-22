import {useAppContext} from '../contextStore';
import User from '../utils/User';

const ProfileContainer = ({children, navigation}) => {
  const {
    actions: {resetUser, resetPreviews},
    state: {user, userLoading},
  } = useAppContext();

  const handleLogout = () => {
    User.remove();
    resetUser();
    resetPreviews();
  };

  return children({
    user,
    isLoading: userLoading,
    logout: handleLogout,
  });
};

export default ProfileContainer;
