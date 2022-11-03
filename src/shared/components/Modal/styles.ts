import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > svg {
    font-size: 2rem;
    cursor: pointer;
    border-radius: 50%;
    transition: background-color 0.3s linear;
    padding: 0.25rem;
    :hover {
      background-color: #323238;
      border-radius: 50%;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 1.35rem;
  font-weight: 600;
`;

export const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1.5rem;

  button {
    width: 100px;
  }
`;
