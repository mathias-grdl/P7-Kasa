import { Link } from 'react-router-dom'
import './index.css';

function Error() {
    return (
        <div>
            <p>404</p>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}
 
export default Error