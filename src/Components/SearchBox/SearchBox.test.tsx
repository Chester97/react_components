import SearchBox, { LIST_OF_CARS } from "./SearchBox";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const defaultProps = {
  placeholder: "Your value...",
};

const renderSearchBox = (props = {}) => {
  const utils = render(<SearchBox {...props} />);
  const inputElement = utils.getByLabelText("search-input") as HTMLInputElement;
  const propositionsList = utils.queryByTestId("prop-list");

  return { ...utils, inputElement, propositionsList };
};

describe("SearchBox",  () => {
  it("should render input",  () => {
    const { inputElement } = renderSearchBox();
    const inputPlaceholder = inputElement.placeholder;

    expect(inputPlaceholder).toMatch(defaultProps.placeholder);
    expect(inputElement).toBeInTheDocument();
  });

  it('should render input with placeholder', () => {
    const { inputElement } = renderSearchBox({placeholder: 'foo'});
    const inputPlaceholder = inputElement.placeholder;

    expect(inputPlaceholder).toMatch("foo");
  })

  it("should not display propositions list", () => {
    const { propositionsList } = renderSearchBox();
    expect(propositionsList).toBeNull();
  });

  it("shoudl render propositions list", async () => {
    const { inputElement } = renderSearchBox();
    inputElement.focus();
    const propElList = await screen.findByTestId("prop-list");

    expect(propElList).toBeVisible();
    expect(propElList).toBeInTheDocument();
  });

  it("should filter data while typying", async () => {
    const { inputElement } = renderSearchBox({ data: LIST_OF_CARS });
    inputElement.focus();
    const propElList = await screen.findByTestId("prop-list");

    userEvent.type(inputElement, "m");
    expect(propElList).toBeVisible();
    expect(inputElement).toHaveValue("m");

    userEvent.type(inputElement, "{backspace}");
    expect(inputElement).toHaveValue("");
  });

  it("should display properly value on typing", async () => {
    const { inputElement } = renderSearchBox({
      data: LIST_OF_CARS,
    });
    inputElement.focus();
    const propElList = await screen.findByTestId("prop-list");
    const propItem0 = await screen.findByTestId("prop-item1");

    userEvent.type(inputElement, "n");
    const propItem1 = await screen.findByTestId("prop-item4");
    const propItem2 = await screen.findByTestId("prop-item5");

    expect(propElList).not.toContainElement(propItem0);
    expect(propElList).toContainElement(propItem1);
    expect(propElList).toContainElement(propItem2);

    userEvent.type(inputElement, "is");
    expect(propElList).toContainElement(propItem1);
    expect(propElList).not.toContainElement(propItem2);
  });
});
