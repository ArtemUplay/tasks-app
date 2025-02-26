import * as yup from 'yup';

export const TaskSchema = yup.object({
  title: yup
    .string()
    .required('Название обязательно')
    .max(50, 'Максимум 50 символов'),
  description: yup
    .string()
    .required('Описание обязательно')
    .max(200, 'Максимум 200 символов'),
  priority: yup.string().required('Приоритет обязателен'),
});
