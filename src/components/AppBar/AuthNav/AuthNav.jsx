import { AuthNavStyled } from './AuthNav-styled';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <AuthNavStyled>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </AuthNavStyled>
  );
};
