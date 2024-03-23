import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex ">
        <li className="px-4 ">
          <Link to="/" className="hidden md:block">
            Inicio y Autenticación
          </Link>
          <Link to="/" className="md:hidden">
            Inicio
          </Link>
        </li>
        <li className="px-4  ">
          <Link to="/usuarios" className="hidden md:block">
            Gestión de Usuarios
          </Link>
          <Link to="/usuarios" className="md:hidden">
            Usuarios
          </Link>
        </li>
        <li className="px-4 ">
          <Link to="/prestamos" className="hidden md:block">
            Operaciones de Préstamos
          </Link>
          <Link to="/prestamos" className="md:hidden">
            Préstamos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
