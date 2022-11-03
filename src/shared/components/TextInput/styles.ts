import styled from 'styled-components';

type Props = {
  variant?: string;
};

export const TextInputForm = styled.div<Props>`
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
    font-size: 0.9rem;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;

    ::placeholder {
      color: #7c7c8a;
      font-size: 0.95rem;
    }

    ${(props) => {
      switch (props.variant) {
        case 'gray':
          return `
          background-color: #202024
        `;
      }
    }}
  }
`;
