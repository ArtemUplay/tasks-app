import { ITask } from 'src/types';
import { v4 as uuidv4 } from 'uuid';

export const generateRandomTask = (): ITask => ({
  id: uuidv4(),
  title: `Task ${Math.floor(Math.random() * 100)}`,
  description: 'This is a randomly generated task.',
  priority: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)] as
    | 'low'
    | 'medium'
    | 'high',
  creationDate: new Date(),
});
