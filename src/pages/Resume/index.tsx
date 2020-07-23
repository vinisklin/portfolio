import React from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

import { Container, ContentBox } from './styles';

const Resume: React.FC = () => {
  return (
    <Container>
      <ContentBox>
        <Link to="/">
          <MdClose size={30} />
        </Link>

        <h2>My Resume</h2>
      </ContentBox>
    </Container>
  );
};

export default Resume;
