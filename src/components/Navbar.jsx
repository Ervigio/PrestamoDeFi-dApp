import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/src/pages/Pagina1/">Inicio y Autenticación</Link>
        </li>
        <li>
          <Link to="/src/pages/Pagina2">Gestión de Usuarios</Link>
        </li>
        <li>
          <Link to="/src/pages/Pagina3">Operaciones de Préstamos</Link>
        </li>
      </ul>
    </nav>
  );
}
