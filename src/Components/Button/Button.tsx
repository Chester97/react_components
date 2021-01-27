import React from 'react';
import * as S from './styles';

export type Props = {
  text?: string,
  isDisabled?: boolean,
  className?: string,
  onAction?: () => void,
}

const  Button: React.FC<Props> = ({ text = "Click", isDisabled = false, className = '', onAction = () => null }): JSX.Element => {
  return (
    <div>
      <S.Button disabled={isDisabled} className={className} onClick={onAction}>{text.length <= 10 ? text : 'Click'}</S.Button>
    </div>
  )
}

export default Button;