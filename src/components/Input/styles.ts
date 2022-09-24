import { Form } from 'react-bootstrap';
import styled from 'styled-components';

export const Div = styled.div`
  margin-top: 0.6rem;
`;

export const InputForm = styled(Form.Control)`
  background-color: transparent;
  border: 1px solid #73778d;
  width: 320px;
  color: #fff;

  &:focus {
    background-color: transparent;
    box-shadow: none;
    border: 1px solid #fff;
    outline: none;
    color: #fff;
  }
`;

export const Label = styled.label`
  font-size: 1rem;
  display: block;
  color: #e9ecef;
  margin-bottom: 0.25rem;
`;

export const Span = styled.span`
  font-size: 0.875rem;
  color: #f2182d;
`;
