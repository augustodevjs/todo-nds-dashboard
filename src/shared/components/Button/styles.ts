import styled, { css } from 'styled-components';

type Props = {
  transparent: boolean;
};

export const Button = styled.button<Props>`
  width: 100%;
  padding: 1rem 1.75rem;
  color: #fff;
  background-color: #00b37e;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  transition: filter 0.3s linear;
  &:hover {
    filter: brightness(1.2);
  }

  ${({ transparent }) =>
    transparent &&
    css`
      background-color: transparent;
      border: 1px solid #00b37e;
      transition: background-color 0.3s linear;

      &:hover {
        background-color: #00b37e;
      }
    `}
`;
