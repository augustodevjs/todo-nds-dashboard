import styled, { css } from 'styled-components';

type Props = {
  transparent: boolean;
  variant?: string;
};

export const Button = styled.button<Props>`
  width: 100%;
  padding: 0.75rem 1.75rem;
  color: #fff;
  background-color: #02966a;
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
      border: 1px solid #02966a;
      transition: background-color 0.3s linear;

      &:hover {
        background-color: #02966a;
      }
    `}

  ${(props) => {
    switch (props.variant) {
      case 'primary':
        return `
            background-color: #02966a
          `;
      case 'danger':
        return `
          background-color: #dc3545
          `;
      case 'info':
        return `
          background-color: #ffc10e
        `;
    }
  }}
`;
