import BrandDashboard from '../../../../assets/BrandDashboard.svg';

import { BiMenu } from 'react-icons/bi';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdInbox, MdFormatListBulleted, MdLogout } from 'react-icons/md';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SidebarDashboard } from './style';

export function Sidebar() {
  const [currentLink, setCurrentLink] = useState(1);

  return (
    <SidebarDashboard>
      <div className="logo">
        <Link to="/">
          <img src={BrandDashboard} alt="logo" />
        </Link>
        <a href="#">
          <BiMenu />
        </a>
      </div>

      <nav>
        <ul>
          <li
            className={currentLink === 1 ? 'active' : 'none'}
            onClick={() => setCurrentLink(1)}
          >
            <Link to="/">
              <MdInbox />
              <span>Tarefas</span>
              <p className="number">5</p>
            </Link>
            <h4>Tarefas</h4>
          </li>

          <li
            className={currentLink === 2 ? 'active' : 'none'}
            onClick={() => setCurrentLink(2)}
          >
            <Link to="/lists">
              <MdFormatListBulleted />
              <span>Listas</span>
            </Link>
            <h4>Listas</h4>
          </li>

          <li className="user-profile">
            <div className="user">
              <FaRegUserCircle />
              <div className="user-info">
                <span>Gabriel Cleiton</span>
                <div>Usuário</div>
              </div>
            </div>

            <span>
              <Link to="/login">
                <MdLogout />
              </Link>
            </span>
          </li>
        </ul>
      </nav>
    </SidebarDashboard>
  );
}
