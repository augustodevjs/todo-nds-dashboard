import styled from 'styled-components';

export const TextAreaInputForm = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 6px;
  }

  textarea {
    padding: 1rem;
    background-color: #202024;
    border: none;
    border-radius: 4px;
    font-size: 0.9rem;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
    resize: none;

    ::placeholder {
      color: #7c7c8a;
      font-size: 0.9rem;
    }
  }
`;
