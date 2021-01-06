import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import useFetch from '../../hooks/useFetch/useFetch';
import WithThemeProvider from '../Theme/WithThemeProvider';
import * as S from './styles';

const dropDownOptions = [{name: "BMW", id: 0}, {name: "Audi", id: 1}, {name: "Mercedes", id: 2}];

function App() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log(data, loading, error);

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
