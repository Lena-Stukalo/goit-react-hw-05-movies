import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const NavItem = styled(NavLink)`
  display: block;
  padding: 10px;
  font-size: 16px;
  color: black;
  text-decoration: none;

  &.active {
    background-color: #f7a372;
    color: #fff;
  }
`;
const NavList = styled.nav`
  display: flex;
  border-bottom: solid 2px #f7a372;
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
