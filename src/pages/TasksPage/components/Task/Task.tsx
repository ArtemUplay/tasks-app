import { FC, memo } from 'react';
import {
  Button,
  Buttons,
  Description,
  TaskPriority,
  TaskContainer,
  Title,
  CreatedDate,
} from './Task.styles';
import { TaskProps } from './Task.types';
import { useAppDispatch } from 'src/store/hooks';
import { setOpenDeleteModal, setOpenEditModal } from 'src/store/slices';

const TaskComponent: FC<TaskProps> = ({
  id,
  description,
  priority,
  title,
  creationDate,
}) => {
  const dispatch = useAppDispatch();

  return (
    <TaskContainer priority={priority}>
      <TaskPriority>
        Приоритет:
        {priority === 'high'
          ? 'Высокий'
          : priority === 'medium'
          ? 'Средний'
          : 'Низкий'}
      </TaskPriority>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <CreatedDate>{creationDate.toLocaleDateString()}</CreatedDate>
      <Buttons>
        <Button
          color='#007bff'
          onClick={() =>
            dispatch(
              setOpenEditModal({
                id,
                description,
                priority,
                title,
                creationDate,
              })
            )
          }
        >
          Редактировать
        </Button>
        <Button
          color='#dc3545'
          onClick={() =>
            dispatch(
              setOpenDeleteModal({
                id,
                description,
                priority,
                title,
                creationDate,
              })
            )
          }
        >
          Удалить
        </Button>
      </Buttons>
    </TaskContainer>
  );
};

export const Task = memo(TaskComponent);
