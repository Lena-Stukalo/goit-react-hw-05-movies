import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const NavItem = styled(NavLink)`
  display: block;
  padding: 10px;
  font-size: 500;
  font-size: 16px;
  color: black;
  text-decoration: none;

  &.active {
    background-color: rgb(64, 160, 216);
    color: #fff;
  }
`;
const NavList = styled.nav`
  display: flex;
  border-bottom: solid 2px red;
`;

const Navigation = () => {
  return (
    <header>
      <NavList>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/movies">Movie</NavItem>
      </NavList>
    </header>
  );
};
export default Navigation;