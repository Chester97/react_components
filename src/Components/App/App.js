import Dropdown from '../Dropdown/Dropdown';
import * as S from './styles';
import SearchBox from "../SearchBox/SearchBox";

const dropDownOptions = [{name: "BMW", id: 0}, {name: "Audi", id: 1}, {name: "Mercedes", id: 2}];

function App() {
  return (
    <S.App>
      App
      <SearchBox placeholder="Type your dara" data={dropDownOptions}/>
      {/*<Dropdown options={dropDownOptions} initialValue="Cars"/>*/}
    </S.App>
  );
}

export default App;
