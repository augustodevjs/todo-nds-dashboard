import styled, { css } from 'styled-components';

type Props = {
  show: boolean;
};

export const Container = styled.main<Props>`
  position: relative;
  padding: 0 1rem;
  font-size: 1rem;
  transition: 0.5s;

  @media screen and (min-width: 768px) {
    padding: 0 1rem 0 calc(68px + 2rem);
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

export const aside = styled.aside<Props>`
  position: fixed;
  top: 0;
  left: -30%;
  height: 100vh;
  width: 68px;
  background-color: #121214;
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
