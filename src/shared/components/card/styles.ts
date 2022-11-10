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
  margin-top: 0.5rem;
  :before {
    content: '';
    width: 2px;
    height: 36px;
    background-color: #ab222e;
    margin-right: 0.75rem;
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
