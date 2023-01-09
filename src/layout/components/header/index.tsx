import React from 'react';
import { useSelector } from 'react-redux';

export const Header: React.FC = () => {

  const user = useSelector((state: any) => state);

  console.log('user', user);

  return (
    <div className='header'>
      <div className='content-header'>
        <div className='logo'>LOGO</div>
        <nav>
          <ul>
            <li>
              <a href='/dashboard'>Dashboard</a>
            </li>
            <li>
              <a href='/usuarios'>Usuários</a>
            </li>
            <li>
              <a href='/#'>Documentos</a>
              <ul>
                <li>Empresa</li>
                <li>Projetos</li>
              </ul>
            </li>
          </ul>
        </nav>      
      </div>
      <div className='isLogged'>
            <div>
                {user.user.name}
            </div>
        </div>
    </div>
  );
}