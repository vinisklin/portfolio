import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import { Container, IconsContainer } from './styles';

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

      <IconsContainer>
        <a href="https://github.com/vinisklin">
          <FaGithub size={40} />
        </a>
        <a href="https://www.linkedin.com/in/vinicius-klingenfus/">
          <FaLinkedin size={40} />
        </a>
      </IconsContainer>
    </Container>
  );
};

export default HomePage;
