import SearchBox from "./SearchBox";
import {render, screen, fireEvent} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Button from "../Button/Button";

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
    const { inputElement } = renderSearchBox();
    expect(inputElement.placeholder).toMatch(defaultProps.placeholder);
    expect(inputElement).toBeInTheDocument();
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

});