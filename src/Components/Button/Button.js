import { stringLength } from '../../utils/stringLength/stringLength';
import { string, bool, func } from 'prop-types';
import * as S from './styles';

function Button({ text, isDisabled, className, onAction }) {

  return (
    <div>
      <S.Button 
        disabled={isDisabled}
        className={className}
        onClick={onAction}>
          { stringLength(text, 10, 'Click') }
      </S.Button>
    </div>
  )
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