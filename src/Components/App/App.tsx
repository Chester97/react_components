import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import * as S from './styles';
import SearchBox from "../SearchBox/SearchBox";
import Button from "../Button/Button";

const dropdownOptions = [{name: "BMW", id: 0}, {name: "Audi", id: 1}, {name: "Mercedes", id: 2}];

const App: React.FC = (): JSX.Element => {
  return (
    <S.App>
      App
      {/*<SearchBox placeholder="Pick Your Car!" />*/}
      <Dropdown options={dropdownOptions} initialValue="Choose Car"/>
      {/*<Button isDisabled={false} text="Klik" onAction={() => alert("HEJKA")}/>*/}
    </S.App>
  );
}

export default App;
