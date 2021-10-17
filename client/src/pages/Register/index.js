import React, { useState } from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import axios from '../../config/axios';
import { get } from 'lodash';
import { useHistory } from 'react-router-dom';
import Loading from '../../components/Loading';

const Register = () => {
  const history = useHistory();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Senha deve ter entre 6 e 50 caracteres');
    }

    if (formErrors) return;

    setIsLoading(true);
    try {
      await axios.post('/users', {
        nome,
        email,
        password,
      });
      toast.success('Você fez o seu cadastro');
      setIsLoading(false);
      history.push('/login');
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);
      setIsLoading(false);
      errors.forEach(error => toast.error(error));
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Crie sua conta</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
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
        <button type="submit">Criar minha conta</button>
      </Form>
    </Container>
  );
};

export default Register;
