import { Link } from 'react-router-dom'
import logo from '../../asset/images/logo.svg';
import './index.css';

 
function Navbar() {
  return (

  <header>
    <img src={logo} alt="Logo" />
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/apropos">A propos</Link></li>
      </ul>
    </nav>
    </header>
  )
}

export default Navbar