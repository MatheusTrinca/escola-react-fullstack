import styled from 'styled-components';

export const Title = styled.h1`
  color: ${props => (props.isRed ? 'red' : 'blue')};
  small {
    color: grey;
  }
`;

export const Paragraph = styled.p`
  color: green;
  font-size: 20px;
`;
