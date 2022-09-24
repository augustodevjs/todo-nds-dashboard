import styled from 'styled-components';

export const Section = styled.section`
  background-color: #25294c;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px);

  a {
    display: none;
    text-decoration: none;
  }

  @media (max-width: 650px) {
    height: 100vh;
    a {
      display: flex;
      justify-content: center;
      margin-bottom: 3.5rem;
      align-self: center;
    }
  }

  @media (max-width: 360px) {
    input {
      width: 240px;
    }
  }
`;

export const FormContainer = styled.form`
  h1 {
    font-family: 'Poppins', sans-serif;
    color: #e9ecef;
    font-weight: 500;
    font-size: 1.375rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    &::before {
      content: '';
      display: inline-block;
      width: 0.4375rem;
      height: 1.6875rem;
      background-color: #27c498;
      margin-right: 0.625rem;
    }
  }

  a {
    font-family: 'Poppins', sans-serif;
    color: #27c498;
    font-weight: 500;
    font-size: 0.75rem;
    margin-top: 1.5rem;
    width: 100%;
    text-align: center;
    text-decoration: none;
    transition: 0.3s ease;
    &:hover {
      filter: brightness(1.2);
    }
  }
`;
