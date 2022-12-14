import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const HeadingWrapper = styled.div`
  display: flex;
`;

export const IconWrapper = styled.div`
  display: flex;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 0.25rem;
  background-color: #323238;
  color: #fff;
  margin-right: 1.2rem;
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  opacity: 0.9;
  margin-bottom: 0;
`;

export const Button = styled.div`
  margin-top: 0.5rem;
`;
