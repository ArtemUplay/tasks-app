import { ITask } from 'src/types/app';

export const tasksArray: ITask[] = [
  {
    id: 1,
    title: 'Test',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, aliquam.',
    priority: 'low',
    creationDate: new Date('2025-02-22').toLocaleDateString(),
  },
  {
    id: 2,
    title: 'Test',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, aliquam.',
    priority: 'medium',
    creationDate: new Date('2025-02-23').toLocaleDateString(),
  },
  {
    id: 3,
    title: 'Test',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, aliquam.',
    priority: 'high',
    creationDate: new Date('2025-02-24').toLocaleDateString(),
  },
  {
    id: 4,
    title: 'Test',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, aliquam.',
    priority: 'low',
    creationDate: new Date('2025-02-25').toLocaleDateString(),
  },
  {
    id: 5,
    title: 'Test',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, aliquam.',
    priority: 'medium',
    creationDate: new Date('2025-02-26').toLocaleDateString(),
  },
];
