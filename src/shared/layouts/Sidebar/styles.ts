import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
  margin-top: 2rem;
  padding: 0 1rem;
  transition: 0.5s;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #00875f;
  padding: 0 1rem;
  transition: 0.5s;

  div {
    font-size: 1.25rem;
    cursor: pointer;
    color: #ffffff;
  }
`;

export const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 3rem;
  padding-top: 1rem;
  transition: 0.5s;
  background: #00875f;

  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    padding: 0.5rem 0 0.5rem 1.5rem;
    height: 100%;

    .nav-logo,
    .nav-link {
      display: grid;
      grid-template-columns: max-content max-content;
    }
  }
`;
