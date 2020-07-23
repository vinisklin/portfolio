import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import { Container, IconsContainer } from './styles';

const HomePage: React.FC = () => {
  return (
    <Container>
      <h1>Vinicius Klingenfus</h1>
      <h4>Full Stack Developer</h4>

      <nav>
        <Link to="/projects">My Projects</Link>
        <Link to="/about-me">About Me</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/resume">Resume</Link>
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
