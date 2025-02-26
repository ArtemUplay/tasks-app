import { FC, memo } from 'react';
import { InputWrapper, StyledInput } from './Input.styles';
import { InputProps } from './Input.types';

const InputComponent: FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <InputWrapper>
      <label>{label}:</label>
      <StyledInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export const Input = memo(InputComponent);
