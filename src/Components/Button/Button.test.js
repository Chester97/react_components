import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

const renderButton = (props) => {
  const utils = render(<Button {...props}/>);
  const buttonElement = utils.getByRole('button');
  
  return { ...utils, buttonElement };
}

describe('Button tests', () => {

  it('should render default button', () => {
      const { buttonElement } = renderButton();

      expect(buttonElement).toBeVisible();
      expect(buttonElement).toHaveTextContent(/click/i);
    });

    it('should have inner text from prop', () => {
      const textProp = 'Buy me!';
      const { buttonElement, rerender } = renderButton({text: textProp});

      expect(buttonElement).toHaveTextContent(textProp);
      expect(textProp.length).toBeLessThanOrEqual(10);

      rerender(<Button text="superultralongstring"/>);
      expect(buttonElement).toHaveTextContent(/click/i);
    });

    it('should disabled button', () => {
      const isDisabled = true;
      const { buttonElement } = renderButton({isDisabled});

      expect(buttonElement).toBeDisabled();
    });

    it('should contain additional styles', () => {
      const className = 'fooBar'
      const {buttonElement} = renderButton({className});

      expect(buttonElement).toHaveClass(className);
    });

    it('should fire callback function', () => {
      const callbackFunc = jest.fn();
      const { buttonElement } = renderButton({onAction: callbackFunc});

      userEvent.click(buttonElement);

      expect(callbackFunc).toBeCalled();
      expect(callbackFunc).toBeCalledTimes(1);

      userEvent.click(buttonElement);
      expect(callbackFunc).toBeCalledTimes(2);
    })

});