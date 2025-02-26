import { FC, useEffect } from 'react';
import {
  CreateTaskButton,
  TaskListContainer,
  FilterButtonsWrapper,
  SortButton,
} from './TasksPage.styles';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import {
  addTask,
  fetchTasks,
  setOpenCreateTaskModal,
  setPriorityFilter,
  setSortByDate,
} from 'src/store/slices';
import { ModalDelete, Task, ModalWithForm } from './components';
import { Loader } from 'src/components';
import { generateRandomTask } from 'src/helpers/common';

export const TasksPage: FC = () => {
  const {
    filteredTasks,
    isLoading,
    isOpenDeleteModal,
    isOpenEditModal,
    isOpenCreateModal,
    priorityFilter,
    sortByDate,
  } = useAppSelector((state) => state.tasks);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(addTask(generateRandomTask()));
    }, 10000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <TaskListContainer>
      <h1>Список задач</h1>
      <CreateTaskButton onClick={() => dispatch(setOpenCreateTaskModal())}>
        Создать задачу
      </CreateTaskButton>

      <FilterButtonsWrapper>
        {['all', 'low', 'medium', 'high'].map((priority) => (
          <button
            key={priority}
            onClick={() =>
              dispatch(
                setPriorityFilter(priority as 'low' | 'medium' | 'high' | 'all')
              )
            }
            disabled={priorityFilter === priority}
          >
            {priority === 'all'
              ? 'Все'
              : priority.charAt(0).toUpperCase() + priority.slice(1)}
          </button>
        ))}
      </FilterButtonsWrapper>

      <SortButton
        onClick={() =>
          dispatch(setSortByDate(sortByDate === 'asc' ? 'desc' : 'asc'))
        }
      >
        {sortByDate === 'asc'
          ? 'Сортировать по убыванию'
          : 'Сортировать по возрастанию'}
      </SortButton>

      {isLoading ? (
        <Loader />
      ) : filteredTasks.length === 0 ? (
        <p>Задач нет</p>
      ) : (
        filteredTasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            priority={task.priority}
            creationDate={task.creationDate}
          />
        ))
      )}

      {isOpenDeleteModal && <ModalDelete />}
      {isOpenEditModal && <ModalWithForm isEdit />}
      {isOpenCreateModal && <ModalWithForm isEdit={false} />}
    </TaskListContainer>
  );
};
