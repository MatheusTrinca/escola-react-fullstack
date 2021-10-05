import React from 'react';
import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyles';

const Login = () => {
  return (
    <Container>
      <Title isRed={false}>
        Login Page <small>Hello World</small>
      </Title>
      <Paragraph>Lorem ipsum dolor sit amet.</Paragraph>
      <button type="button">Enviar</button>
    </Container>
  );
};

export default Login;
