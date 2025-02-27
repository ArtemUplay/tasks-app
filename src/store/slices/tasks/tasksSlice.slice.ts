import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TasksInitialState } from './tasksSlice.types';
import { ITask } from 'src/types';

const initialState: TasksInitialState = {
  tasks: [],
  filteredTasks: [],
  priorityFilter: 'all',
  sortByDate: 'desc',
  isOpenDeleteModal: false,
  isOpenEditModal: false,
  isOpenCreateModal: false,
  isLoading: false,
  taskInModal: null,
  error: null,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setLoaderTasksPage: (state) => {
      state.isLoading = true;
    },
    unsetLoaderTasksPage: (state) => {
      state.isLoading = false;
    },
    setTaskPageError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearTaskPageError: (state) => {
      state.error = null;
    },
    setOpenDeleteModal: (state, action: PayloadAction<ITask>) => {
      state.isOpenDeleteModal = true;
      state.taskInModal = action.payload;
    },
    closeDeleteModal: (state) => {
      state.isOpenDeleteModal = false;
      state.taskInModal = null;
    },
    setOpenEditModal: (state, action: PayloadAction<ITask>) => {
      state.isOpenEditModal = true;
      state.taskInModal = action.payload;
    },
    closeEditModal: (state) => {
      state.isOpenEditModal = false;
      state.taskInModal = null;
    },
    setOpenCreateTaskModal: (state) => {
      state.isOpenCreateModal = true;
    },
    closeCreateTaskModal: (state) => {
      state.isOpenCreateModal = false;
    },
    setTasks: (state, action: PayloadAction<ITask[]>) => {
      state.tasks = action.payload;
      state.filteredTasks =
        state.priorityFilter === 'all'
          ? state.tasks
          : state.tasks.filter(
              (task) => task.priority === state.priorityFilter
            );
    },
    deleteTask: (state, action: PayloadAction<ITask['id']>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      state.filteredTasks = state.filteredTasks.filter(
        (task) => task.id !== action.payload
      );
    },
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks = [action.payload, ...state.tasks];

      const parseDate = (dateString: string) => {
        const [day, month, year] = dateString.split('.').map(Number);
        return new Date(year, month - 1, day).getTime();
      };

      const sortedTasks = [...state.tasks].sort((a, b) => {
        const dateA = parseDate(a.creationDate);
        const dateB = parseDate(b.creationDate);

        return state.sortByDate === 'asc' ? dateA - dateB : dateB - dateA;
      });

      state.filteredTasks =
        state.priorityFilter === 'all'
          ? sortedTasks
          : sortedTasks.filter(
              (task) => task.priority === state.priorityFilter
            );
    },
    editTask: (state, action: PayloadAction<ITask>) => {
      const filteredTaskIndex = state.filteredTasks.findIndex(
        (task) => task.id === action.payload.id
      );
      const allTaskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.filteredTasks[filteredTaskIndex] = action.payload;
      state.tasks[allTaskIndex] = action.payload;
    },
    setPriorityFilter: (
      state,
      action: PayloadAction<'low' | 'medium' | 'high' | 'all'>
    ) => {
      state.priorityFilter = action.payload;
      state.filteredTasks =
        action.payload === 'all'
          ? state.tasks
          : state.tasks.filter((task) => task.priority === action.payload);
    },
    setSortByDate: (state, action: PayloadAction<'asc' | 'desc'>) => {
      state.sortByDate = action.payload;

      const parseDate = (dateString: string) => {
        const [day, month, year] = dateString.split('.').map(Number);
        return new Date(year, month - 1, day).getTime();
      };

      const sortedTasks = [...state.tasks].sort((a, b) => {
        const dateA = parseDate(a.creationDate);
        const dateB = parseDate(b.creationDate);

        return action.payload === 'asc' ? dateA - dateB : dateB - dateA;
      });

      state.filteredTasks =
        state.priorityFilter === 'all'
          ? sortedTasks
          : sortedTasks.filter(
              (task) => task.priority === state.priorityFilter
            );
    },
  },
});

export const {
  setLoaderTasksPage,
  unsetLoaderTasksPage,
  setTaskPageError,
  clearTaskPageError,
  setOpenDeleteModal,
  closeDeleteModal,
  setTasks,
  deleteTask,
  addTask,
  setOpenEditModal,
  closeEditModal,
  editTask,
  setOpenCreateTaskModal,
  closeCreateTaskModal,
  setPriorityFilter,
  setSortByDate,
} = tasksSlice.actions;
export const tasks = tasksSlice.reducer;
