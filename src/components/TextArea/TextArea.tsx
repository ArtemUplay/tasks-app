import { FC, memo } from 'react';
import { StyledTextArea, TextAreaWrapper } from './TextArea.styles';
import { TextAreaProps } from './TextArea.types';

const TextAreaComponent: FC<TextAreaProps> = ({
  label,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <TextAreaWrapper>
      <label>{label}</label>
      <StyledTextArea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </TextAreaWrapper>
  );
};

export const TextArea = memo(TextAreaComponent);
