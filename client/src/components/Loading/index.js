import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';

const Loading = ({ isLoading }) => {
  if (!isLoading) return <div></div>;
  return (
    <Container>
      <div></div>
      <span>Carregando</span>
    </Container>
  );
};

Loading.prototype = {
  isLoading: PropTypes.bool,
};

Loading.defaultProps = {
  isLoading: false,
};

export default Loading;
