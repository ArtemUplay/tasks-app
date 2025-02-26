import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TasksInitialState } from './tasksSlice.types';
import { ITask } from 'src/types';

const initialState: TasksInitialState = {
  tasks: [],
  filteredTasks: [], // Новый массив с отфильтрованными задачами
  priorityFilter: 'all', // Фильтр приоритетов
  sortByDate: 'asc', // Сортировка по дате
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
      state.tasks = action.payload.reverse();
      state.filteredTasks =
        state.priorityFilter === 'all'
          ? state.tasks
          : state.tasks.filter(
              (task) => task.priority === state.priorityFilter
            );
    },
    deleteTask: (state, action: PayloadAction<ITask['id']>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks = [action.payload, ...state.tasks];
    },
    editTask: (state, action: PayloadAction<ITask>) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.tasks[taskIndex] = action.payload;
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
      state.filteredTasks.sort((a, b) => {
        return action.payload === 'asc'
          ? new Date(a.creationDate).getTime() -
              new Date(b.creationDate).getTime()
          : new Date(b.creationDate).getTime() -
              new Date(a.creationDate).getTime();
      });
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
