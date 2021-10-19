import { RepositoryItem } from "./RepositoryItem";
import { useEffect, useState } from "react";

import '../style/repositories.scss'


interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function Repositorylist() {

  const [respositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);




  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {respositories.map(repository => <RepositoryItem key={repository.name} repository={repository} />)}
      </ul>
    </section>
  );
}