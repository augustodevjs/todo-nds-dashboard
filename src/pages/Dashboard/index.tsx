import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../shared/hooks/useAuth';
import './index.css';
import Logo from '../../shared/assets/logo.svg';

import { BiMenu, BiTask } from 'react-icons/bi';
import { MdLogout, MdList } from 'react-icons/md';
import * as S from './styles';

export const Dashboard = () => {
  const { logout } = useAuth();
  const [show, setShow] = useState(false);

  return (
    <>
      <S.Container show={!show}>
        {/* <header className={`header ${!show ? 'space-toggle' : undefined}`}>
          <div className="header-toggle" onClick={() => setShow(!show)}>
            <BiMenu
              className={`fas fa-bars ${
                !show ? 'fa-solid fa-xmark' : undefined
              }`}
            />
          </div>
        </header> */}

        <S.aside show={!show}>
          <nav className="nav">
            <div>
              <div className={!show ? 'logo' : 'withoutLogo'}>
                <img src={Logo} alt="" />
                <BiMenu onClick={() => setShow(!show)} />
              </div>

              <div className="nav-list">
                <Link to="/dashboard" className="nav-link active">
                  <BiTask />
                  <span className="nav-link-name">Tarefas</span>
                </Link>
                <Link to="/hotel" className="nav-link">
                  <MdList />
                  <span className="nav-link-name">Listas</span>
                </Link>
              </div>
            </div>

            <Link to="/" onClick={logout} className="nav-link">
              <MdLogout />
              <span className="nav-link-name">Logout</span>
            </Link>
          </nav>
        </S.aside>

        <h1>Content</h1>
      </S.Container>
    </>
  );
};
