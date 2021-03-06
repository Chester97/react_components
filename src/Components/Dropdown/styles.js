import styled, { keyframes }  from 'styled-components';

const aVisibility = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: inline-block;
  width: 200px;
  margin: 0 auto;
  position: relative;
`;

export const Button = styled.button`
  width: 100%;
`;

export const List = styled.div`
  position: absolute;
  display: ${({ isVisible }) => isVisible ? 'block' : 'none'};
  top: ${({dropDirection}) => dropDirection !== 'bottom' ? '100%' : 'auto'};
  bottom: ${({dropDirection}) => dropDirection === 'bottom' ? '100%' : 'auto'};
  width: 100%;
  animation: ${aVisibility} .7s ease-in;
  z-index: 1;
`;

export const Element = styled.a`
  padding: 10px 20px;
  text-align: center;
  display: block;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #2980B9;
  }
  &::first-letter {
    text-transform: uppercase;
  }
`;