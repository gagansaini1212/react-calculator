import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 4rem;
  background-color: #bbb;
  width: 100%;
  p {
    font-size: 2.5rem;
    margin: 0.5rem;
  }
`;

const Result = ({ result }) => {
  return (
    <Container>
      <p>{result}</p>
    </Container>
  );
};

export default Result;
