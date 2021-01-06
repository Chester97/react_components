import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import WithThemeProvider from '../Theme/WithThemeProvider';
import * as S from './styles';

const dropDownOptions = [{name: "BMW", id: 0}, {name: "Audi", id: 1}, {name: "Mercedes", id: 2}];

function App() {
  return (
    <WithThemeProvider>
      <S.App>
        App
        <Dropdown options={dropDownOptions} initialValue="Cars"/>
        <Button text="Kliknij mnie"/>
      </S.App>
    </WithThemeProvider>
  );
}

export default App;
