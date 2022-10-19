import styled, { css } from 'styled-components';

type Props = {
  show: boolean;
};

export const Container = styled.main<Props>`
  position: relative;
  padding: 1.25rem 1.25rem 0 1.25rem;
  font-size: 1rem;
  transition: 0.5s;
  margin-left: 250px;

  ${({ show }) =>
    !show &&
    css`
      @media screen and (min-width: 768px) {
        margin-left: calc(3rem + 1.25rem);
      }
    `}
`;

export const Aside = styled.aside<Props>`
  position: fixed;
  top: 0;
  left: -30%;
  height: 100vh;
  width: 68px;
  background-color: #18181c;
  transition: 0.5s;

  @media screen and (min-width: 768px) {
    left: 0;
  }

  ${({ show }) =>
    show &&
    css`
      left: 0;

      @media screen and (min-width: 768px) {
        width: 250px;
      }
    `}
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  height: 100%;

  a {
    display: grid;
    align-items: center;
    grid-template-columns: max-content max-content;
    column-gap: 1.2rem;
    padding: 1rem 0 1rem 1.5rem;
    font-size: 1rem;
    position: relative;
    color: #fff;
    transition: 0.5s;

    svg {
      font-size: 1.5rem;
    }

    &:hover {
      color: #fff;
      background-color: #1b1b1e;
    }
  }
`;

export const Logo = styled.div<Props>`
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  justify-content: center;
  transition: 0.3s all linear;

  img {
    display: none;
  }

  svg {
    font-size: 1.7rem;
    cursor: pointer;
  }

  ${({ show }) =>
    show &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 1.25rem;

      img {
        display: block;
        width: 7rem;
      }

      svg {
        font-size: 2rem;
        cursor: pointer;
      }
    `}
`;

export const List = styled.div`
  a {
    display: grid;
    align-items: center;
    grid-template-columns: max-content max-content;
    column-gap: 1.2rem;
    padding: 1rem 0 1rem 1.5rem;
    font-size: 1rem;
    position: relative;
    color: #fff;
    transition: 0.5s;
    background-color: #1b1b1e;

    &:hover {
      color: #fff;
      background-color: #1b1b1e;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      height: 56px;
      width: 2px;
      background-color: #00b37e;
      transition: 0.5s;
    }

    svg {
      font-size: 1.5rem;
      color: #00b37e;
    }
  }
`;

export const Header = styled.header<Props>`
  position: fixed;
  top: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #00b37e;
  padding: 0 1rem;
  transition: 0.5s;

  svg {
    font-size: 1.25rem;
    cursor: pointer;
    color: #121214;
  }

  @media screen and (min-width: 768px) {
    height: calc(3rem + 1rem);
    padding-left: calc(68px + 2rem);
  }

  ${({ show }) =>
    show &&
    css`
      padding-left: calc(68px + 1rem);

      @media screen and (min-width: 768px) {
        padding-left: 280px;
      }
    `}
`;
