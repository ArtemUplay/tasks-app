import { Priority } from 'src/types';

export interface TaskProps {
  id: string | number;
  title: string;
  description: string;
  priority: Priority;
  creationDate: Date;
}

export interface StyledTaskProps {
  priority: Priority;
}
