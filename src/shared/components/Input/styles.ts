import styled from 'styled-components';

export const InputForm = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 4px;
    & + input {
      margin-bottom: 1rem;
    }
  }
  input {
    width: 100%;
    padding: 1rem;
    background-color: #121214;
    border: none;
    border-radius: 6px;
    color: #ffffff;
  }
`;
