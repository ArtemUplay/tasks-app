import { FC, memo } from 'react';
import { RadioButtonProps } from './RadioButton.types';
import { RadioButtonWrapper } from './RadioButton.styles';

const RadioButtonComponent: FC<RadioButtonProps> = ({
  checked,
  label,
  onChange,
  value,
}) => {
  return (
    <RadioButtonWrapper>
      <label>
        <input
          type='radio'
          checked={checked}
          onChange={onChange}
          value={value}
        />
        {label}
      </label>
    </RadioButtonWrapper>
  );
};

export const RadioButton = memo(RadioButtonComponent);
