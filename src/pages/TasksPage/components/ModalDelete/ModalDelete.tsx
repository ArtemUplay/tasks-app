import { FC, memo, useCallback } from 'react';
import { Button, ButtonsWrapper, ModalText } from './ModalDelete.styles';
import { Modal } from 'src/components';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { closeDeleteModal, deleteTask } from 'src/store/slices';

const ModalDeleteComponent: FC = () => {
  const { taskInModal } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  const onCloseModal = useCallback(() => {
    dispatch(closeDeleteModal());
  }, [dispatch]);

  const onSubmitDelete = useCallback(() => {
    dispatch(deleteTask(taskInModal.id));
  }, [dispatch]);

  return (
    <Modal onClose={onCloseModal} title='Удаление задачи'>
      <div>
        <ModalText>
          Вы действительно хотите удалить задачу с названием{' '}
          {taskInModal?.title}?
        </ModalText>
        <ButtonsWrapper>
          <Button color='#007bff'>Отмена</Button>
          <Button color='#dc3545' onClick={onSubmitDelete}>
            Удалить
          </Button>
        </ButtonsWrapper>
      </div>
    </Modal>
  );
};

export const ModalDelete = memo(ModalDeleteComponent);
