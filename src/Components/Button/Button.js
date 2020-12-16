import { string, bool, arrayOf, func, number } from 'prop-types';
import * as S from './styles';

function Button({ text, isDisabled, className, onAction }) {
  return <div>
    <S.Button disabled={isDisabled} className={className} onClick={onAction}>{text.length <= 10 ? text : 'Click'}</S.Button>
  </div>
}

export default Button;

Button.propTypes = {
  text: string,
  isDisabled: bool,
  className: string,
  onAction: func,
};

Button.defaultProps = {
  text: 'Click',
  isDisabled: false,
  className: '',
  onAction: () => null,
}