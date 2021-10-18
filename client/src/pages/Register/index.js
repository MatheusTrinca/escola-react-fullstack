import React, { useEffect, useState } from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import Loading from '../../components/Loading';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';

const Register = () => {
  const dispatch = useDispatch();
  const {
    id,
    nome: nomeStored,
    email: emailStored,
    isLoading,
  } = useSelector(state => state.auth.user);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!id) return;
    setNome(nomeStored);
    setEmail(emailStored);
  }, [id, nomeStored, emailStored]);

  const handleSubmit = async e => {
    e.preventDefault();
    let formErrors = false;
    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido');
    }

    if (!id && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.error('Senha deve ter entre 6 e 50 caracteres');
    }

    if (formErrors) return;
    dispatch(actions.registerRequest({ id, nome, email, password }));
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? 'Edite' : 'Crie'} sua conta</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            value={nome}
            type="text"
            name="nome"
            id="nome"
            placeholder="Seu nome"
            onChange={e => setNome(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            value={email}
            type="email"
            name="email"
            id="email"
            placeholder="Seu email"
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Sua senha"
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">{id ? 'Editar' : 'Criar'} minha conta</button>
      </Form>
    </Container>
  );
};

export default Register;
