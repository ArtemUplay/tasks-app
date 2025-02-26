import {
  ChangeEvent,
  FC,
  FormEvent,
  memo,
  useCallback,
  useEffect,
} from 'react';
import { Input, Modal, RadioButton, TextArea } from 'src/components';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import {
  closeCreateTaskModal,
  closeEditModal,
  fetchCreateTask,
  fetchEditTask,
} from 'src/store/slices';
import { Button, ButtonsWrapper, ErrorText } from './ModalWithForm.styles';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { ITask } from 'src/types';
import { FormValues, ModalWithFormProps } from './ModalWithForm.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { TaskSchema } from './ModalWithForm.schema';
import { v4 as uuidv4 } from 'uuid';

const defaultValues: FormValues = {
  title: '',
  description: '',
};

const ModalWithFormComponent: FC<ModalWithFormProps> = ({ isEdit }) => {
  const { taskInModal } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  const {
    control,
    setValue,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormValues>({
    defaultValues: isEdit ? taskInModal : defaultValues,
    mode: 'onSubmit',
    resolver: yupResolver(TaskSchema),
  });

  const onCloseModal = useCallback(() => {
    if (isEdit) {
      dispatch(closeEditModal());
    } else {
      dispatch(closeCreateTaskModal());
    }
  }, [isEdit, dispatch]);

  const onSubmit = useCallback(
    async (evt: FormEvent) => {
      evt.preventDefault();

      await handleSubmit((data: ITask) => {
        if (isEdit) {
          dispatch(fetchEditTask(data));
        } else {
          dispatch(
            fetchCreateTask({
              ...data,
              id: uuidv4(),
              creationDate: new Date(),
            })
          );
        }
        onCloseModal();
      })();
    },
    [isValid, dispatch]
  );

  const onTaskInputTitleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setValue('title', event.target.value);
    },
    []
  );

  const onTaskTextAreaDecriptionChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setValue('description', event.target.value);
    },
    []
  );

  useEffect(() => {
    if (!isEdit) {
      setValue('priority', 'low');
    }
  }, [isEdit]);

  return (
    <Modal
      title={isEdit ? 'Редактирование задачи' : 'Создание задачи'}
      onClose={onCloseModal}
    >
      <form onSubmit={onSubmit}>
        <Controller
          control={control}
          name='title'
          render={({ field, fieldState: { error } }) => (
            <>
              <Input
                label='Название задачи'
                placeholder='Введите название задачи'
                value={field.value}
                onChange={onTaskInputTitleChange}
              />
              <ErrorText>{error?.message}</ErrorText>
            </>
          )}
        />
        <Controller
          control={control}
          name='description'
          render={({ field, fieldState: { error } }) => (
            <>
              <TextArea
                label='Описание задачи'
                placeholder='Введите описание задачи'
                value={field.value}
                onChange={onTaskTextAreaDecriptionChange}
              />
              <ErrorText>{error?.message}</ErrorText>
            </>
          )}
        />

        <Controller
          control={control}
          name='priority'
          render={({ field }) => {
            return (
              <>
                <RadioButton
                  label='Низкий приоритет'
                  checked={field.value === 'low'}
                  value='low'
                  onChange={() => field.onChange('low')}
                />
                <RadioButton
                  label='Средний приоритет'
                  checked={field.value === 'medium'}
                  value='medium'
                  onChange={() => field.onChange('medium')}
                />
                <RadioButton
                  label='Высокий приоритет'
                  checked={field.value === 'high'}
                  value='high'
                  onChange={() => field.onChange('high')}
                />
              </>
            );
          }}
        />
        <ButtonsWrapper>
          <Button color='#007bff' onClick={onCloseModal}>
            Отмена
          </Button>
          <Button color='#7FFF00' type='submit'>
            {isEdit ? 'Редактировать' : 'Создать'}
          </Button>
        </ButtonsWrapper>
      </form>
    </Modal>
  );
};

export const ModalWithForm = memo(ModalWithFormComponent);
