import styled, { css } from 'styled-components';

type Props = {
  show: boolean;
};

export const Container = styled.main<Props>`
  position: relative;
  padding: 0 1rem;
  font-size: 1rem;
  font-family: 'Nunito Sans', sans-serif;
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
