import './index.css';
import { Link } from 'react-router-dom'
import logoImg from '../../asset/images/logo.svg';

function Logo() {
    return (
      <Link to="/"><img src={logoImg} alt="Logo kasa" /></Link>
    )
  }
  
  export default Logo