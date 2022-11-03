import styled from 'styled-components';

export const TextInputForm = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 6px;
    & + input {
      margin-bottom: 1rem;
    }
  }

  input {
    padding: 1rem;
    background-color: #121214;
    border: none;
    border-radius: 4px;
    color: #ffffff;

    ::placeholder {
      color: #7c7c8a;
      font-size: 0.95rem;
    }
  }
`;
