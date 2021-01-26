import { useState } from "react";
import { string, arrayOf, shape, number } from "prop-types";
import useOutsideClick from "../../hooks/useOutsideClick/useOutsideClick";
import * as S from "./styles";

export const LIST_OF_CARS = [
  {
    name: "Bmw",
    id: 1,
  },
  {
    name: "Mercedes",
    id: 2,
  },
  {
    name: "Audi",
    id: 3,
  },
  {
    name: "Nissan",
    id: 4,
  },
  {
    name: "Nitro",
    id: 5,
  },
];

function SearchBox({ placeholder, data = LIST_OF_CARS }) {
  const [showList, setShowList] = useState(false);
  const [inputVal, setInputVal] = useState("");

  const clearStates = () => {
    setInputVal("");
    setShowList(false);
  };

  const { refElement } = useOutsideClick(clearStates);

  const emmitValue = (e) => setInputVal(e.target.value);

  const emmitFocus = () => setShowList(true);

  let filteredItems = data.filter((item) =>
    item.name.toLowerCase().includes(inputVal.toLowerCase())
  );

  return (
    <S.SearchBoxWrapper>
      <S.SearchBoxContainer>
        <input
          type="text"
          placeholder={placeholder}
          value={inputVal}
          ref={refElement}
          aria-label="search-input"
          onChange={emmitValue}
          onFocus={emmitFocus}
        />
        {showList && (
          <S.ListWrapper data-testid="prop-list">
            {filteredItems.map(({ id, name }) => (
              <S.ListItem data-testid={`prop-item${id}`} key={id}>
                {name}
              </S.ListItem>
            ))}
          </S.ListWrapper>
        )}
      </S.SearchBoxContainer>
    </S.SearchBoxWrapper>
  );
}

export default SearchBox;

SearchBox.propTypes = {
  placeholder: string,
  data: arrayOf(
    shape({
      name: string,
      id: number,
    })
  ),
};

SearchBox.defaultProps = {
  placeholder: "Your value...",
};
