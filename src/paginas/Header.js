import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";

const Header = () => {
   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid">
            <a className="navbar-brand">Biblioteca</a>
            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarNavDropdown"
               aria-controls="navbarNavDropdown"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
               <ul className="navbar-nav">
                  <li className="nav-item">
                     <Link to="/" className="nav-link">
                        Home
                     </Link>
                  </li>
                  <li className="nav-item dropdown">
                     <a
                        className="nav-link dropdown-toggle"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                     >
                        Cadastros
                     </a>
                     <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                     >
                        <li>
                           <Link to="/controle/tipo-usuario" className="dropdown-item">Tipo Usuario</Link>
                        </li>
                        <li>
                           <Link to="/controle/usuario" className="dropdown-item">Usuario</Link>
                        </li>
                     </ul>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Header;
