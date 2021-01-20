import { useState, useRef } from 'react';
import { string, arrayOf, shape, number } from 'prop-types';
import * as S from './styles';
import debounce  from 'lodash.debounce';

function compareStrig(str1,str2) {
  return str1.localeCompare(str2, undefined, { sensitivity: 'base' });
}

function SearchBox({placeholder, data}) {
  const inputRef = useRef(null);
  const [showList, setShowList] = useState(false);
  const [items,setItems] = useState([]);

  const foo = () => {
    console.log(inputRef.current.value);
    if(inputRef.current.value !== '') {
      setShowList(true);
    }
  }

  return (
    <S.SearchBoxContainer>
      <input type="text" placeholder={placeholder} ref={inputRef} aria-label="search-input" onChange={foo} onFocus={() => setShowList(true)}/>
      { showList && (<div data-testid="prop-list">
        elo
        {
          items.map((item) => <div>{item}</div>)
        }
      </div>)}
    </S.SearchBoxContainer>
  )
}

export default SearchBox;

SearchBox.propTypes = {
  placeholder: string,
  data: arrayOf(shape({
    name: string,
    id: number,
  }))
}

SearchBox.defaultProps = {
  placeholder: 'Your value...'
}