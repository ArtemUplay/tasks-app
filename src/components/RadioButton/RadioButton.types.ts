import { Priority } from 'src/types';

export interface RadioButtonProps {
  label: string;
  checked: boolean;
  value: Priority;
  onChange: () => void;
}
