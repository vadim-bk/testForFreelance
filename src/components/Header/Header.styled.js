export const { default: styled } = require('styled-components');

export const Navbar = styled.nav`
  background-color: #343a40;
  flex-flow: row nowrap;
  justify-content: flex-start;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 45px;
`;

export const Nav = styled.div`
  margin-right: auto;
  display: flex;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`;

export const NavLink = styled.span`
  display: block;
  padding: 0.5rem 1rem;
  color: #fff;
`;
