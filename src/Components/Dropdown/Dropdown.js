import { useState } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick/useOutsideClick';
import { string, bool, arrayOf, shape, number } from 'prop-types';
import * as S from './styles';

function Dropdown({ dropDirection, onHover, initialValue, options }) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(initialValue);
  
  const hideVisibility = () => setIsVisible(false);
  const changeVisibilityState = () => setIsVisible(!isVisible);
  const changeSelectedValue = (name) => {
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

Dropdown.propTypes = {
  options: arrayOf(shape({
    id: number,
    name: string
  })).isRequired,
  dropDirection: string,
  onHover: bool,
  initialValue: string,
}

Dropdown.defaultProps = {
  dropDirection: 'top',
  onHover: false,
  initialValue: 'Dropdown Element'
}