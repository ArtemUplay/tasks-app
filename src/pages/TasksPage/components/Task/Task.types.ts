import { Priority } from 'src/types';

export interface TaskProps {
  id: string | number;
  title: string;
  description: string;
  priority: Priority;
  creationDate: string;
}

export interface StyledTaskProps {
  priority: Priority;
}
