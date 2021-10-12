import styled from 'styled-components';

export const ButtonCustomizado = styled.button`
  background-color: #1e90ff;
  color: white;
  border: 0;
  padding: 5px;
  font-size: 18px;
  border-radius: 5px;
  margin: 8px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    filter: opacity(85%);
  }
  &:active {
    filter: opacity(100%);
  }
`;
