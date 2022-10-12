import { Link, useNavigate } from 'react-router-dom';

import { Button, Particle, TextInput } from '../../shared/components';
import Logo from '../../shared/assets/logo.svg';
import * as S from './styles';
import { FormEvent, useState } from 'react';
import { api } from '../../shared/api';

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

    api
      .post('/Auth/register', { name, email, password, passwordConfirm })
      .then(() => {
        alert('Usuário cadastrado com sucesso');
        navigate('/');
      })
      .catch((error) => {
        alert('Não foi possível cadastrar');
        console.log(error);
      });
  };

  return (
    <>
      <Particle />
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
