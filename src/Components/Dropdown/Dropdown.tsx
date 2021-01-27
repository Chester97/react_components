import React, { useState } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick/useOutsideClick';
import * as S from './styles';

export type OptionsProps = {
  id: number,
  name: string,
}

export type Props = {
  dropDirection?: any,
  onHover?: boolean,
  initialValue?: string,
  options: Array<OptionsProps>
}

const Dropdown: React.FC<Props> = ({ dropDirection = 'top', onHover = false, initialValue = 'Select Element', options }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(initialValue);
  
  const hideVisibility = () => setIsVisible(false);
  const changeVisibilityState = () => setIsVisible(!isVisible);
  const changeSelectedValue = (name: string): void => {
    setSelectedValue(name);
    changeVisibilityState();
  }

  const { refElement } = useOutsideClick(hideVisibility);
  
  return (
    <S.Container>
      <S.Wrapper ref={refElement} onMouseEnter={onHover ? changeVisibilityState : null} onMouseLeave={onHover ? changeVisibilityState : null}> 
      <S.Button onClick={changeVisibilityState}>{selectedValue}</S.Button>
        <S.List data-testid="list" isVisible={isVisible} dropDirection={dropDirection}>
          {
            options && options.map(({name, id}) => <S.Element key={name} data-testid="option" onClick={() => changeSelectedValue(name)}>{name}</S.Element>)
          }
        </S.List>
      </S.Wrapper>
    </S.Container>
  )
}

export default Dropdown;