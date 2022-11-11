import styled from 'styled-components';

export const Container = styled.div`
  background-color: #29292e;
  width: 100%;
  padding: 1rem;
  border-radius: 8px;

  h3 {
    font-size: 1rem;
    font-weight: 500;
    color: #ab222e;
    padding-bottom: 0.25rem;
    border-bottom: 1px solid #7c7c8a;
  }
`;

export const TitleContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;

  svg {
    cursor: pointer;
  }
`;

export const Text = styled.div`
  h2 {
    font-size: 1rem;
    font-weight: bold;
  }

  p {
    margin-top: 0.25rem;
    font-size: 0.75rem;
    color: #c4c4cc;
  }
`;
