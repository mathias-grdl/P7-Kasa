import { Link } from 'react-router-dom'
import logo from './logo.svg';
import './index.css';


function Navbar() {
  return (

  <header>
    <img src={logo} alt="Logo" />
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/apropos">A propos</Link>
    </nav>
    </header>
  )
}

export default Navbar