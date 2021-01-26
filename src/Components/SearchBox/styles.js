import styled from 'styled-components';

export const SearchBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  transition: 0.3s ease;
  &:hover {
    cursor: pointer;
    background-color: lightgrey;
  }
`;