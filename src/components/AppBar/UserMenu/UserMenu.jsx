import { UserMenuStyled } from './UserMenu-styled';
import { Button } from 'components/common';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth-operations';
import { selectUser } from 'redux/auth-selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <UserMenuStyled>
      <p>Hello {user.name}</p>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </UserMenuStyled>
  );
};
