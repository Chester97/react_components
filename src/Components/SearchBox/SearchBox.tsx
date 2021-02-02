import {useState, useRef, ReactElement } from "react";
import useOutsideClick from "../../hooks/useOutsideClick/useOutsideClick";
import * as S from "./styles";

type ItemData = {
  name: string,
  id: number
}

type Props = {
  placeholder?: string,
  data?: Array<ItemData>,
}
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

function SearchBox({ placeholder = "Your value...", data = LIST_OF_CARS }: Props): ReactElement {
  const inputRef  = useRef(null);
  const [currentValue, setCurrentValue] = useState<ItemData | null>(null);
  const [showList, setShowList] = useState<boolean>(false);
  const [inputVal, setInputVal] = useState<string>("");

  const clearStates = (): void => {
    setInputVal("");
    setShowList(false);
  };

  const { refElement } = useOutsideClick(clearStates);

  const emmitValue = (e: React.ChangeEvent<HTMLInputElement>) => setInputVal(e.target.value);

  const emmitFocus = (): void => setShowList(true);

  const pickItemValue = (id: number) => {
    const pickedItem = data.filter((item) => item.id === id)[0];
    if(pickedItem) {
      setCurrentValue(pickedItem);
      clearStates();
    }
  }

  let filteredItems: Array<ItemData> = data.filter((item: ItemData) =>
    item.name.toLowerCase().includes(inputVal.toLowerCase())
  );

  return (
    <S.SearchBoxWrapper>
      <S.SearchBoxContainer ref={refElement}>
        <input
          type="text"
          placeholder={placeholder}
          value={inputVal}
          ref={inputRef}
          aria-label="search-input"
          onChange={emmitValue}
          onFocus={emmitFocus}
        />
        {showList && (
          <S.ListWrapper data-testid="prop-list">
            {filteredItems.map(({ id, name }) => (
              <S.ListItem data-testid={`prop-item${id}`} key={id} onClick={() => pickItemValue(id)}>
                {name}
              </S.ListItem>
            ))}
          </S.ListWrapper>
        )}
      </S.SearchBoxContainer>
      {
        currentValue && <p>You have picked {currentValue.name}</p>
      }
    </S.SearchBoxWrapper>
  );
}

export default SearchBox;
