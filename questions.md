# RTL and JEST questions

1. What's the difference between grab element by:

```
  const { getByText } = render(<Foo />);
  expect(getByText('foo;)).toBeInTheDocument();
```

or grab by that way:

```
  render(<Foo />);
  const grabbedElement = screen.getByText('foo');
  expect(grabbedElement).toBeInTheDocument();
```

2. What's going on with [this](https://www.robinwieruch.de/react-testing-library) in a REACT TESTING LIBRARY: SEARCH TYPES getByRole section?

3. How to resolve problem with act() error in <App /> component, here's and example:

```
  import Foo from "./components/Foo";

function App() {
  return (
    <div>
      some value
      <Foo />
    </div>
  );
}

export default App;
```

this will return an error with "act" because of <Foo /> component inside. So, how to separate unit test by rtl?

4. Should I testing a props validation, like this example:

```
  const availablePositions = ['left', 'right'];
  <Component position='top'/>
```

or

```
<Component position="lefttt"/>
```

Should I write tests which check the value of the props?

5. Can I rerender Component with no passed props as I did in base example? 

```
  const { getByText, queryByTestId } = render(<Dropdown isHover/>);
  ...some tests
  rerender(<Dropdow />)
  ...some test for case without 'isHover' prop
```

6. How to improve that kind of situation: 

```
    test('should display passed options', () => {
    const { getByText} = render(<Dropdown options={dropdownOption}/>);

    dropdownOption.forEach((item) => {
      expect(getByText(item)).toBeDefined();
    })
  });
```
when I have to pass some array of values to display, and make sure each of that values are equal to rendered options.

7. How to get rid of passing required props for each of component declaration, like so: 

```
    rerender(<A foo={foo}/>)

    userEvent.click(buttonElement);
    expect(list).toHaveStyle('bottom: 100%');

    rerender(<A foo={foo}/>)
```

8. How to test multiple elements which are rendered by .map or recursion? E.g below:

```
  test('Should change selected value', () => {
    const { getByRole, queryAllByTestId, queryByTestId } = render(<Dropdown options={dropdownOption} initialValue="test"/>);
    const buttonElement = getByRole('button');
    const options = queryAllByTestId('option');
    const list = queryByTestId('list')

    expect(buttonElement).toHaveTextContent('test');

    userEvent.click(buttonElement);

    options.forEach((item) => {
      userEvent.click(item);
      screen.debug(item);
      expect(buttonElement).toHaveTextContent(item);
    });

    expect(list).not.toBeVisible();

  });

```
and how to add case with changed buttonElement innerText? 
