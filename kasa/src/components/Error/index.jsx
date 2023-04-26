import { Link } from 'react-router-dom'
import './index.css';

function Error() {
    return (
        <div className='error_content'>
            <p>404</p>
            <h2 className='error_text'>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}
 
export default Error