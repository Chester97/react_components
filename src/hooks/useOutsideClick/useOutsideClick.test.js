import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import useOutsideClick from './useOutsideClick';

const callbackFunction = jest.fn();

function Helper() {
  const { refElement } = useOutsideClick(callbackFunction)

  return (
    <div data-testid="container">
      <div ref={refElement} data-testid="wrapper">
        Sibling1
        <p data-testid="inner-wrapper">Test</p>
      </div>
      <div data-testid="foo">Sibling_Child</div>
    </div>
  )
}

describe('useOutsideClick', () => {

    it('inner element should be in the document', () => {
      const { getByTestId } = render(<Helper />);
      const wrapper = getByTestId('wrapper');

      expect(wrapper).toBeVisible();
    });

  it('Should call callback function on outside click', () => {
    const { getByTestId } = render(<Helper />);
    const foo = getByTestId('foo');
    const container = getByTestId('container');
    
    userEvent.click(foo);
    expect(callbackFunction).toHaveBeenCalled();
    expect(callbackFunction).toHaveBeenCalledTimes(1);

    userEvent.click(container);
    expect(callbackFunction).toHaveBeenCalled();
    expect(callbackFunction).toHaveBeenCalledTimes(2);

  });

  it('should not call callback function on inner click', () => {
    const { getByTestId } = render(<Helper />);
    const wrapper = getByTestId('wrapper');

    userEvent.click(wrapper);
    expect(callbackFunction).not.toHaveBeenCalled();
  })

  it('should not fire callback when children of inner element are clicked', () => {
    const { getByTestId } = render(<Helper />);
    const innerWrapper = getByTestId('inner-wrapper');

    userEvent.click(innerWrapper);
    expect(callbackFunction).not.toHaveBeenCalled();
  })

});



//https://github.com/wellyshen/react-cool-onclickoutside/blob/master/src/__tests__/useOnclickoutside.tsx