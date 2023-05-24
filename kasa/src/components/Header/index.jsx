import "./index.css";
import logo_kasa from "../Logo/index.jsx";
import Navbar from "../Navbar/index.jsx";
import logoImg from "../../asset/images/logo.svg";

function Header() {
  return (
    <header>
      {logo_kasa(logoImg)}
      {Navbar()}
    </header>
  );
}

export default Header;
