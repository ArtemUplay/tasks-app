import { tasksArray } from 'src/__mocks__/tasks';
import { fakeApi } from 'src/helpers';

export const fakeFetchTasks = async () => {
  await fakeApi(2000);

  return tasksArray;
};

export const fakeFetchCreateTask = async () => {
  await fakeApi(1000);
};

export const fakeFetchEditTasks = async (taskId: number | string) => {
  await fakeApi(1000);
};

export const fakeFetchDeleteTask = async (taskId: number | string) => {
  await fakeApi(1000);
};
