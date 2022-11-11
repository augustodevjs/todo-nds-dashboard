import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;

  @media (max-width: 1120px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 625px) {
    grid-template-columns: 1fr;
  }
`;

export const GroupButton = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 2rem 0;
    width: 200px;
  }
`;
