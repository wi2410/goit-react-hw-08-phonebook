import styled from '@emotion/styled';

export const ListItem = styled.li`
  width: 400px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  
  &:hover {
    background-color: #F0F0F0;
  }
`;

export const ItemButton = styled.button`
  padding: 4px;
  margin-left: 16px;
  width: 60px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #0057b8;
    color: white;
  }
`;