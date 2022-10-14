import { Link, useNavigate } from 'react-router-dom';

import { Button, TextInput, TsParticle } from '../../shared/components';
import Logo from '../../shared/assets/logo.svg';
import * as S from './styles';
import { FormEvent, useState } from 'react';
import { AuthCreateUser } from '../../shared/services';

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!name || !email || !password || !passwordConfirm) {
      alert('Preencha todos os campos corretamente!');
    }

    AuthCreateUser({ name, email, password, passwordConfirm }).then(
      (result) => {
        console.log(result);
        if (result instanceof Error) {
          return result.message;
        } else {
          alert('Usuário cadastrado com sucesso');
          navigate('/');
        }
      },
    );
  };

  return (
    <>
      <TsParticle />
      <S.Container>
        <S.Content>
          <S.Logo>
            <img src={Logo} alt="Logo da Aplicação" />
          </S.Logo>

          <S.Form onSubmit={handleSubmit}>
            <h2>Nova Conta</h2>
            <TextInput
              type="text"
              label="Nome"
              placeholder="Digite o seu nome"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <TextInput
              type="email"
              label="Email"
              placeholder="Digite o seu email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
              type="text"
              label="Senha"
              placeholder="Digite a sua senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextInput
              type="text"
              label="Confirmação de Senha"
              placeholder="Repita novamente sua senha"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <Button type="submit">Entrar</Button>
          </S.Form>

          <Link to="/">Já possui uma conta?</Link>
        </S.Content>
      </S.Container>
    </>
  );
};
