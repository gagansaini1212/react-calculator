import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 4rem;
  background-color: #8c8cd0;
  width: 100%;
  overflow: hidden;
  p {
    font-size: 2.5rem;
    margin: 0.5rem;
    color: greenyellow;
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
