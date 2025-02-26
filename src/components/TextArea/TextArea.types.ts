import { ChangeEvent } from 'react';

export interface TextAreaProps {
  placeholder: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
