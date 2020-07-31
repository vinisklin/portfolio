import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { MdClose, MdIndeterminateCheckBox } from 'react-icons/md';

import { Container, ContentBox, ReposContainer, RepositoryBox } from './styles';

interface IRepository {
  name: string;
  description: string;
  language: string;
  created_at: string;
  html_url: string;
}

function formatDate(date: string): string {
  const stringToDate = new Date(date);
  const formatter = Intl.DateTimeFormat('pt-BR');

  console.log(formatter.format(stringToDate));
  return formatter.format(stringToDate);
}

const Projects: React.FC = () => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  // Consumes GitHub API to get repos info
  useEffect(() => {
    async function getRepositoriesFromApi() {
      const response = await axios.get<IRepository[]>(
        'https://api.github.com/users/vinisklin/repos',
      );

      const githubRepos: IRepository[] = response.data.map(repository => ({
        name: repository.name,
        description: repository.description,
        language: repository.language,
        created_at: formatDate(repository.created_at),
        html_url: repository.html_url,
      }));

      setRepositories(githubRepos);
    }

    getRepositoriesFromApi();
  }, []);

  return (
    <Container>
      <ContentBox>
        <Link to="/">
          <MdClose size={30} />
        </Link>

        <h2>My Projects</h2>

        <ReposContainer>
          {repositories.map(repository => (
            <RepositoryBox key={repository.name} href={repository.html_url}>
              <h3>{repository.name}</h3>
              <p>{repository.description}</p>
              <div>
                <span>{repository.language}</span>
                <p>{repository.created_at}</p>
              </div>
            </RepositoryBox>
          ))}
        </ReposContainer>
      </ContentBox>
    </Container>
  );
};

export default Projects;
