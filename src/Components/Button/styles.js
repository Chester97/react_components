import styled from 'styled-components';

export const Button = styled.button.attrs(props => ({
  className: props.className,
}))`
  border: 2px solid lightgray;
  display: flex;
  padding: 10px 30px;
  border-radius: 5px;
  background: transparent;
  color: lightgray;
  font-size: 14px;
  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: none;
  }
  &:active {
    color: white;
    border: 2px solid white;
  }
`;