import { ChangeEvent } from 'react';

export interface InputProps {
  placeholder: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
