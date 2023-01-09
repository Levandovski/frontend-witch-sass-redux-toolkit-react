import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUser, logout } from '../../store/userSlice';


const Dashboard: React.FC = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state?.user);

  console.log('user', user);

  const handleLogin = (name: string) => {
    dispatch(changeUser(name))
  };

  const handleLogout = () => {
    dispatch(logout())
  };

  return (
    <div className='default-page'>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li>
            <a href="/usuarios">Usuários</a>
          </li>
        </ul>
      </nav>
      <button onClick={() => {
          navigate('/usuarios');
      }}>
        Pagina de Usuários
      </button>
      <button onClick={() => handleLogin("on")}>
        Logar
      </button>
      <button onClick={() => handleLogout()}>
        Logout
      </button>
   </div>
  );
}

export default Dashboard;