import styled from '@emotion/styled';

export const Label = styled.label`
  display: block;
`;
export const FilterInput = styled.input`
  border: 1px solid black;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.21);
  margin-bottom: 16px;
  margin-top: 8px;
  padding: 4px;
  outline: none;
  border-radius: 10px;

  &:hover,
  :focus {
    border: 1px solid #0057b8;
  }
`;