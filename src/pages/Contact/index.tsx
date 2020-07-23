import React from 'react';
import { Link } from 'react-router-dom';
import { MdClose, MdMail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import { Container, ContentBox } from './styles';

const Contact: React.FC = () => {
  return (
    <Container>
      <ContentBox>
        <Link to="/">
          <MdClose size={30} />
        </Link>

        <h2>Contact</h2>

        <nav>
          <a href="https://github.com/vinisklin">
            <FaGithub size={40} />
          </a>
          <a href="https://www.linkedin.com/in/vinicius-klingenfus/">
            <FaLinkedin size={40} />
          </a>
          <a href="mailto:vinisklin@gmail.com">
            <MdMail size={40} />
          </a>
        </nav>
      </ContentBox>
    </Container>
  );
};

export default Contact;
