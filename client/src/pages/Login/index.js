import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Form } from '../Register/styled';
import { isEmail } from 'validator';
import { toast } from 'react-toastify';
import * as actions from '../../store/modules/auth/actions';
import { get } from 'lodash';
import Loading from '../../components/Loading';

const Login = props => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.auth);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const prevPath = get(props, 'location.state.prevPath', '/');

  const handleSubmit = async e => {
    e.preventDefault();
    let formErrors = false;
    if (!isEmail(email) || password.length < 6 || password.length > 50) {
      toast.error('Email ou Senha inválidos');
    }
    if (formErrors) return;
    dispatch(actions.loginRequest({ email, password, prevPath, history }));
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
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
          Senha:
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Sua senha"
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
};

export default Login;
