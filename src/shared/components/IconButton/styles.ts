import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  font-size: 1rem;
  border: 2px solid transparent;
  border-radius: 4px;
  & + & {
    margin-left: 0.5rem;
  }
`;
