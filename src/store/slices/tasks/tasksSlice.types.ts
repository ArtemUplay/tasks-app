import { ITask } from 'src/types';

export interface TasksInitialState {
  tasks: ITask[];
  filteredTasks: ITask[];
  isOpenDeleteModal: boolean;
  isOpenEditModal: boolean;
  isOpenCreateModal: boolean;
  isLoading: boolean;
  taskInModal: ITask | null;
  priorityFilter: 'low' | 'medium' | 'high' | 'all' | null;
  sortByDate: 'asc' | 'desc';
  error: string | null;
}
