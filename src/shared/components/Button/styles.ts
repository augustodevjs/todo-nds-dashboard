import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  padding: 1rem 1rem;
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
`;
