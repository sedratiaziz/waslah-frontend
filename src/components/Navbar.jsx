import { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import styled from 'styled-components';
import { Home, Work, School, Person, Settings } from '@mui/icons-material';
import { authContext } from '../context/AuthContext';

const NavContainer = styled.nav`
  width: 250px;
  height: 100vh;
  background: #1a1a1a;
  position: fixed;
  left: 0;
  top: 0;
  color: white;
  padding: 2rem 0;
  z-index: 1000;
`;

const Logo = styled(Link)`
  display: block;
  padding: 0 2rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  color: white;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &.active {
    background: rgba(255, 255, 255, 0.1);
    border-left: 4px solid #4364F7;
  }

  svg {
    margin-right: 1rem;
  }
`;

const UserInfo = styled.div`
  position: absolute;
  bottom: 2rem;
  width: 100%;
  padding: 0 2rem;
  color: #ffffff80;
`;

function Navbar() {
  const { user, logout } = useContext(authContext);

  return (
    <NavContainer>
      <Logo to="/">Waslah</Logo>
      <div>
        <NavItem to="/" end>
          <Home /> Home
        </NavItem>
        <NavItem to="/jobs">
          <Work /> Jobs
        </NavItem>
        <NavItem to="/courses">
          <School /> Courses
        </NavItem>
        <NavItem to="/profile">
          <Person /> Profile
        </NavItem>
        <NavItem to="/settings">
          <Settings /> Settings
        </NavItem>
      </div>
      <UserInfo>
        {user ? (
          <>
            <p>{user.name}</p>
            <NavItem as="button" onClick={logout} style={{ border: 'none', background: 'none', width: '100%', textAlign: 'left' }}>
              Logout
            </NavItem>
          </>
        ) : (
          <NavItem to="/login">Login</NavItem>
        )}
      </UserInfo>
    </NavContainer>
  );
}

export default Navbar;
