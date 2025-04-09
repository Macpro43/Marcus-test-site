import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav\`
  background: #111;
  padding: 20px;
  text-align: center;
  border-bottom: 2px solid #00ffea;
\`;

const NavLink = styled(Link)\`
  margin: 0 20px;
  font-size: 12px;

  &:hover {
    color: #ff00ff;
  }
\`;

export default function Header() {
  return (
    <Nav>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
      <NavLink to="/projects">PROJECTS</NavLink>
      <NavLink to="/contact">CONTACT</NavLink>
    </Nav>
  );
}
