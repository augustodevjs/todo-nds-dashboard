import * as S from './styles';
import { BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './style.css';
import { useState } from 'react';

export const SideBar: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <main className={!show ? 'space-toggle' : ''}>
      <header className={`header ${!show ? 'space-toggle' : null}`}>
        <div className="header-toggle" onClick={() => setShow(!show)}>
          <BiMenu />
        </div>
      </header>

      <aside className={`sidebar ${!show ? 'show' : null}`}>
        <nav className="nav">
          <div>
            <Link to="/" className="nav-logo">
              <BiMenu />
              <span className="nav-logo-name">Homepage</span>
            </Link>

            <div className="nav-list">
              <Link to="/dashboard" className="nav-link active">
                <BiMenu />
                <span className="nav-link-name">Dashboard</span>
              </Link>
              <Link to="/hotel" className="nav-link">
                <BiMenu />
                <span className="nav-link-name">Hotel</span>
              </Link>
              <Link to="/gallery" className="nav-link">
                <BiMenu />
                <span className="nav-link-name">Gallery</span>
              </Link>
              <Link to="/gallery" className="nav-link">
                <BiMenu />
                <span className="nav-link-name">Transaction</span>
              </Link>
            </div>
          </div>

          <Link to="/logout" className="nav-link">
            <BiMenu />

            <span className="nav-link-name">Logout</span>
          </Link>
        </nav>
      </aside>

      <h1>Content</h1>
    </main>
  );
};
