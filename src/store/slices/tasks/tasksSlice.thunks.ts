import { TAppDispatch } from 'src/store';
import {
  addTask,
  deleteTask,
  editTask,
  setLoaderTasksPage,
  setTaskPageError,
  setTasks,
  unsetLoaderTasksPage,
} from './tasksSlice.slice';
import {
  fakeFetchCreateTask,
  fakeFetchDeleteTask,
  fakeFetchEditTasks,
  fakeFetchTasks,
} from 'src/api';
import { ITask } from 'src/types';

export const fetchTasks = () => async (dispatch: TAppDispatch) => {
  try {
    dispatch(setLoaderTasksPage());

    const data = await fakeFetchTasks();

    dispatch(setTasks(data));
  } catch (error) {
    dispatch(setTaskPageError('Something went wrong. Please, update page'));
  } finally {
    dispatch(unsetLoaderTasksPage());
  }
};

export const fetchCreateTask =
  (task: ITask) => async (dispatch: TAppDispatch) => {
    try {
      dispatch(setLoaderTasksPage());

      await fakeFetchCreateTask();

      dispatch(addTask(task));
    } catch (error) {
      dispatch(setTaskPageError('Something went wrong. Please, update page'));
    } finally {
      dispatch(unsetLoaderTasksPage());
    }
  };

export const fetchEditTask =
  (task: ITask) => async (dispatch: TAppDispatch) => {
    try {
      dispatch(setLoaderTasksPage());

      await fakeFetchEditTasks(task.id);

      dispatch(editTask(task));
    } catch (error) {
      dispatch(setTaskPageError('Something went wrong. Please, update page'));
    } finally {
      dispatch(unsetLoaderTasksPage());
    }
  };

export const fetchDeleteTask =
  (taskId: ITask['id']) => async (dispatch: TAppDispatch) => {
    try {
      dispatch(setLoaderTasksPage());

      await fakeFetchDeleteTask(taskId);

      dispatch(deleteTask(taskId));
    } catch (error) {
      dispatch(setTaskPageError('Something went wrong. Please, update page'));
    } finally {
      dispatch(unsetLoaderTasksPage());
    }
  };
