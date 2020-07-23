import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { MdClose } from 'react-icons/md';

import { Container, ContentBox } from './styles';

interface IRepository {
  name: string;
  description: string;
  created_at: Date;
  html_url: string;
}

const Projects: React.FC = () => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  // Consumes GitHub API to get repos info
  useEffect(() => {
    async function getRepositories() {
      const response = await axios.get<IRepository[]>(
        'https://api.github.com/users/vinisklin/repos',
      );

      const githubRepos: IRepository[] = response.data.map(repository => ({
        name: repository.name,
        description: repository.description,
        created_at: repository.created_at,
        html_url: repository.html_url,
      }));

      setRepositories(githubRepos);
    }

    getRepositories();
  }, []);

  return (
    <Container>
      <ContentBox>
        <Link to="/">
          <MdClose size={30} />
        </Link>

        <h2>My Projects</h2>

        {repositories.map(repository => (
          <h4>{repository.name}</h4>
        ))}
      </ContentBox>
    </Container>
  );
};

export default Projects;
