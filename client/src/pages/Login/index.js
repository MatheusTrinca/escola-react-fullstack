import React from 'react';
import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../config/axios';
import { useDispatch } from 'react-redux';
import * as exampleActions from '../../store/modules/example/actions';

const Login = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    async function getAlunos() {
      const alunos = await axios.get('/alunos');
      console.log(alunos.data);
    }
    getAlunos();
  }, []);

  const handleClick = e => {
    e.preventDefault();
    dispatch(exampleActions.clicaBotao());
  };

  return (
    <Container>
      <Title isRed={false}>
        Login Page <small>Hello World</small>
      </Title>
      <Paragraph>Lorem ipsum dolor sit amet.</Paragraph>
      <button onClick={handleClick} type="button">
        Enviar
      </button>
    </Container>
  );
};

export default Login;
