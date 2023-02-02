import { Outlet, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = (props) => {
  const isLogged = Cookies.get('token');

  return isLogged ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
