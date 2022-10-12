import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  color: #fff;
  background-color: #00875f;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  transition: filter 0.3s linear;
  &:hover {
    filter: brightness(1.2);
  }
`;
