import * as yup from 'yup';
import { ISignUpForm } from '../models';

export const signUpForm: yup.SchemaOf<ISignUpForm> = yup.object({
  name: yup.string(),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatório'),
  passwordConfirm: yup
    .string()
    .required('Confirmação de senha é obrigatório')
    .oneOf([yup.ref('password'), 'Senhas não conferem.']),
});
