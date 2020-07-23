import React from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

import { Container, ContentBox } from './styles';

const Projects: React.FC = () => {
  return (
    <Container>
      <ContentBox>
        <Link to="/">
          <MdClose size={30} />
        </Link>

        <h2>My Projects</h2>
      </ContentBox>
    </Container>
  );
};

export default Projects;
