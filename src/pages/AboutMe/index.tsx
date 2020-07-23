import React from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

import { Container, ContentBox } from './styles';

const AboutMe: React.FC = () => {
  return (
    <Container>
      <ContentBox>
        <Link to="/">
          <MdClose size={30} />
        </Link>

        <h2>About Me</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </ContentBox>
    </Container>
  );
};

export default AboutMe;
