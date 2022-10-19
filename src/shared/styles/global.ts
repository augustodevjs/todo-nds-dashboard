import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
  }

  input {
    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px #015F43;
    }
  }

  a {
    text-decoration: none;
    :focus {
      outline: none;
      box-shadow: none;
    }
  }

  body {
    background-color: #202024;
    color: #E1E1E6;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }

  ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 14px 14px transparent;
      border: solid 4px transparent;
      border-radius: 0.5rem;
      background: #202024;
    }

    ::-webkit-scrollbar-thumb {
      box-shadow: inset 0 0 10px 10px #323238;
      border-radius: 6px;
    }

  .rdt_Pagination {
    background-color: #29292e;
    color: #c4c4c6;
    margin: 0.5rem 0 1rem 0;

    div {
      background-color: transparent;

      button {
        svg {
          fill: #C4C4CC
        }
      }
    }

    @media(max-width: 1229px) {
      margin-top: 0;
    }
  }
`;

// white: '#fff',

// 'gray-100': '#E1E1E6',
// 'gray-300': '#C4C4CC',
// 'gray-400': '#8D8D99',
// 'gray-500': '#7C7C8A',
// 'gray-600': '#323238',
// 'gray-700': '#29292E',
// 'gray-800': '#202024',
// 'gray-900': '#121214',

// 'green-300': '#00B37E',
// 'green-500': '#00875F',
// 'green-700': '#015F43',

// 'red-300': '#F75A68',
// 'red-500': '#AB222E',
// 'red-700': '#7A1921',
