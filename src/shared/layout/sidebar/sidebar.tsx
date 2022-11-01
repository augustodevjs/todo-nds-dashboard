import { ReactNode, useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { MdInbox, MdList, MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks';
import Logo from '../../assets/logo.svg';
import * as S from './styles';

type SidebarProps = {
  children: ReactNode;
};

export const SideBar: React.FC<SidebarProps> = ({ children }) => {
  const { logout } = useAuth();
  const [show, setShow] = useState(false);

  return (
    <>
      <S.Container show={!show}>
        {/* {show && (
          <S.Header show={!show}>
            <BiMenu onClick={() => setShow(!show)} />
          </S.Header>
        )} */}

        <S.Aside show={!show}>
          <S.Nav>
            <div>
              <S.Logo show={!show}>
                <img src={Logo} />
                <BiMenu onClick={() => setShow(!show)} />
              </S.Logo>

              <S.List>
                <Link to="/tasks">
                  <MdInbox />
                  <span>Tarefas</span>
                </Link>
                <Link to="/lists">
                  <MdList />
                  <span>Listas</span>
                </Link>
              </S.List>
            </div>

            <Link to="/" onClick={logout}>
              <MdLogout />
              <span>Logout</span>
            </Link>
          </S.Nav>
        </S.Aside>

        <div>{children}</div>
      </S.Container>
    </>
  );
};
