import SearchBox from "./SearchBox";
import {render, screen, fireEvent} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Button from "../Button/Button";

const LIST_OF_CARS = [
  {
    name: 'Bmw',
    id: 1,
  },
  {
    name: 'Mercedes',
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
  }
]

const defaultProps = {
  placeholder: 'Your value...',
}

const renderSearchBox = (props = {}) => {
  const utils = render(<SearchBox {...props}/>);
  const inputElement = utils.getByLabelText('search-input');
  const propositionsList = utils.queryByTestId('prop-list');

  return { ...utils, inputElement, propositionsList };
}

describe('SearchBox', () => {

  it('should render input', () => {
    const { inputElement, rerender } = renderSearchBox();
    expect(inputElement.placeholder).toMatch(defaultProps.placeholder);
    expect(inputElement).toBeInTheDocument();

    rerender(<SearchBox placeholder={'foo'}/>);

    expect(inputElement.placeholder).toMatch('foo');
  });

  it('should not display propositions list', () => {
    const { propositionsList } = renderSearchBox();
    expect(propositionsList).toBeNull();
  });

  it('shoudl render propositions list', async () => {
    const { propositionsList, inputElement } = renderSearchBox();
    inputElement.focus();
    const propElList = await screen.findByTestId('prop-list');

    expect(propElList).toBeVisible();
    expect(propElList).toBeInTheDocument();
  });

  it('should filter data while typying', async () => {
    const { inputElement, propositionsList, getByPlaceholderText } = renderSearchBox({data: LIST_OF_CARS});
    inputElement.focus();
    const propElList = await screen.findByTestId('prop-list');
    console.log(inputElement.value, inputElement.value.length);


    userEvent.type(inputElement, 'm');
    expect(propElList).toBeVisible();
    expect(inputElement).toHaveValue('m');

    userEvent.type(inputElement, '{backspace}')
    expect(inputElement).toHaveValue('');

  });

});