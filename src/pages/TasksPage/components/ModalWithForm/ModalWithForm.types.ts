import * as yup from 'yup';
import { InferType } from 'yup';
import { TaskSchema } from './ModalWithForm.schema';

export interface ModalWithFormProps {
  isEdit: boolean;
}

export type FormValues = yup.InferType<typeof TaskSchema>;
