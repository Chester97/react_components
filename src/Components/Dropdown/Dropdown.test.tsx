import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dropdown, { Props, OptionsProps } from './Dropdown';

const dropdownOption: Array<OptionsProps> = [{name: "BMW", id: 0}, {name: "Audi", id: 1}, {name: "Mercedes", id: 2}];


const renderDropdown = (props?: Partial<Props>) => {
  const utils = render(<Dropdown options={dropdownOption} {...props} />);
  const buttonElement = utils.getByRole('button');
  const list = utils.queryByTestId('list');

  return { ...utils, buttonElement, list }
}

describe('Dropdown Component', () => {

  test('Should render component', () => {
    const { getByText } = render(<Dropdown options={dropdownOption}/>);
    const headerElement = getByText(/dropdown element/i);

    expect(headerElement).toBeInTheDocument();
  });

  test('should render list on button click', async () => {
    const { buttonElement, list } = renderDropdown();

    expect(list).not.toBeVisible();
    expect(buttonElement).toBeVisible();

    userEvent.click(buttonElement);
    expect(list).toBeVisible();
  });

  test('should toggle list visibility on click', () => {
    const { buttonElement, list } = renderDropdown();

    expect(list).not.toBeVisible();
    expect(buttonElement).toBeVisible();

    userEvent.click(buttonElement);
    expect(list).toBeVisible();

    userEvent.click(buttonElement);
    expect(list).not.toBeVisible();

    userEvent.hover(buttonElement);
    expect(list).not.toBeVisible();
  });

  test('should display list on hover when props are passed', () => {
    const { buttonElement, list } = renderDropdown({ onHover: true });

    userEvent.hover(buttonElement);
    expect(list).toBeVisible();
  });

  test('should display list in specific position', () => {
    const { buttonElement, list, rerender } = renderDropdown();


    userEvent.click(buttonElement);
    expect(list).toHaveStyle('top: 100%');

    rerender(<Dropdown dropDirection="bottom" options={dropdownOption}/>)

    userEvent.click(buttonElement);
    expect(list).toHaveStyle('bottom: 100%');

    rerender(<Dropdown dropDirection="left" options={dropdownOption}/>)
  
    userEvent.click(buttonElement);
    expect(list).toHaveStyle('top: 100%');
  });

  test('should display initialValue when props passed', () => {
    let initialValue = "cars"
    const { buttonElement, rerender } = renderDropdown({initialValue})

    expect(buttonElement).toHaveTextContent(initialValue);

    rerender(<Dropdown options={dropdownOption}/>);

    expect(buttonElement).toHaveTextContent(initialValue);
  });

  test('should display passed options', () => {
    const { getByText} = renderDropdown();

    dropdownOption.forEach(({name}) => {
      expect(getByText(name)).toBeDefined();
    })
  });

  test('Should change selected value', () => {
    const { buttonElement, list, queryAllByTestId } = renderDropdown({initialValue: 'test'})
    const options = queryAllByTestId('option');

    expect(buttonElement).toHaveTextContent('test');

    userEvent.click(buttonElement);

    options.forEach((item) => {
      userEvent.click(item);
      expect(buttonElement).toHaveTextContent(item);
    });

    expect(list).not.toBeVisible();

  });
  
});