import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 24px;
  border: 1px solid black;
  background-color: #ffd700;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.21);
`;

export const FormInput = styled.input`
  border: 1px solid black;
  box-shadow: 4px 4px 4px 1px rgba(0, 0, 0, 0.21);
  margin-bottom: 16px;
  margin-top: 6px;
  padding: 4px;
  outline: none;
  border-radius: 10px;
  &:hover,
  :focus {
    border: 1px solid #0057b8;
  }
`;

export const SubmitButton = styled.button`
  padding: 4px;
  width: 150px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #0057b8;
    color: white;
  }
`;