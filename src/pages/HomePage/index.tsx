import React from 'react';

import { Container } from './styles';

const HomePage: React.FC = () => {
  return (
    <Container>
      <h1>VINICIUS KLINGENFUS</h1>
      <h4>FULL STACK DEVELOPER</h4>

      <nav>
        <a href="/#">My Projects</a>
        <a href="/#">About Me</a>
        <a href="/#">Contact</a>
        <a href="/#">Resume</a>
      </nav>
    </Container>
  );
};

export default HomePage;
