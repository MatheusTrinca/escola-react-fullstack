import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { useHistory } from 'react-router';

const Page404 = () => {
  const history = useHistory();
  console.log(history);
  return (
    <Container>
      <h1>Esta página não existe</h1>
    </Container>
  );
};

export default Page404;
