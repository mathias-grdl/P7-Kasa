import { Link } from 'react-router-dom'
import './index.css';
 
function Navbar() {
  return (

    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/apropos">A propos</Link></li>
      </ul>
    </nav>

  )
}

export default Navbar