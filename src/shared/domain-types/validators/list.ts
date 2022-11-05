import * as yup from 'yup';
import { ListFormInput } from '../models';

export const listFormValidation: yup.SchemaOf<ListFormInput> = yup.object({
  name: yup.string().required('O campo é obrigatório'),
});
