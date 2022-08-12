import { Outlet, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = (props) => {
  const isLogged = Cookies.get('jwt');

  return isLogged ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
