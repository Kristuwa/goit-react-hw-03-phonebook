import { Form, Field } from 'formik';
import styled from '@emotion/styled';

export const FormContainer = styled(Form)`
  width: 300px;
  padding: 20px;
  margin-bottom: 20px;
  border: 2px solid #000000;
  border-radius: 10px;
`;

export const Label = styled.label`
  font-size: 18px;
`;

export const Input = styled(Field)`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 5px;
  border-radius: 5px;
  background-color: #e7dada;
  font-size: 14px;
`;
