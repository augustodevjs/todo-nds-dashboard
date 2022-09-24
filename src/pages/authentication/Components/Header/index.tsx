import { HeaderTodo } from './styles';
import { Link } from 'react-router-dom';
import { ImgSvg } from '../ImgSvg';

type HeaderProps = {
  text: string;
};

export function Header({ text }: HeaderProps) {
  return (
    <HeaderTodo>
      <div>
        <ImgSvg />
        <Link to={text === 'Não possui uma conta?' ? '/signup' : '/login'}>
          {text}
        </Link>
      </div>
    </HeaderTodo>
  );
}
