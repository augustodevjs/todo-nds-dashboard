import { Link } from 'react-router-dom';
import Brand from '../../../../assets/Brand.svg';

export function ImgSvg() {
  return (
    <Link to="/login">
      <img src={Brand} alt="logo" />
    </Link>
  );
}
