import Dropdown from '../Dropdown/Dropdown';
import * as S from './styles';

const dropDownOptions = [{name: "BMW", id: 0}, {name: "Audi", id: 1}, {name: "Mercedes", id: 2}];

function App() {
  return (
    <S.App>
      App
      <Dropdown options={dropDownOptions} initialValue="Cars"/>
    </S.App>
  );
}

export default App;
