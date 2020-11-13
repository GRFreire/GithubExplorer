import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="logo" />
      <Title>Explore repositórios no github</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="repo">
          <img
            src="https://avatars0.githubusercontent.com/u/41879254?s=460&u=b715b15b5d0a4268682d74aa668245296b846067&v=4"
            alt="GRFreire"
          />
          <div>
            <strong>GRFreire/sboticscompiler</strong>
            <p>A CLI for sBotics c# projects</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
