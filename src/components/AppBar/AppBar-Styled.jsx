import styled from 'styled-components';

export const AppBarStyled = styled.nav`
  /* margin-top: 20px; */
  /* margin-right: auto;
  margin-left: auto; */
  /* margin-bottom: 15px; */
  height: 55px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dce9e4;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.9);
  a {
    font-size: 1.5rem;
    font-family: sans-serif;
    outline: none;
    text-decoration: none;
    /* padding: 2px 1px 0; */
    padding-right: 15px;
    &:hover {
      color: red;
    }
    &.active {
      color: #ff00c8;
    }
  }
`;
