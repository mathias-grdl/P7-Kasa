import './index.css';
import logo_kasa from "../Logo/index.jsx";
import Navbar from "../Navbar/index.jsx";

 
function Header() {
  return (

  <header>
    {logo_kasa()}
    {Navbar()}
    </header>
  )
}

export default Header