import styled from 'styled-components';

export const HeaderTodo = styled.header`
  background-color: #202342;
  div {
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 2rem;
    a {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      color: #27c498;
      text-decoration: none;
      transition: 0.1s ease;
      &:hover {
        filter: brightness(1.2);
      }
    }
  }
  @media (max-width: 650px) {
    display: none;
  }
`;
