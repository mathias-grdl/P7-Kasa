import './index.css';
import { Link } from 'react-router-dom'
import logoImg from '../../asset/images/logoBlanc.svg';

function LogoBlanc() {
    return (
      <Link to="/"><img src={logoImg} alt="Logo kasa" /></Link>
    )
  }
  
  export default LogoBlanc