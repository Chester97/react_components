import styled from 'styled-components';

export const Button = styled.button.attrs(props => ({
  className: props.className,
}))`
  border: none;
`;