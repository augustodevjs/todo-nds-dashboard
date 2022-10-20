import * as yup from 'yup';
import { ISignInForm } from '../models';

export const signInForm: yup.SchemaOf<ISignInForm> = yup.object({
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatório'),
});
