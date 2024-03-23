import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex ">
        <li className="p-1">
          <Link to="/" className="hidden md:block">
            <button className="border-r px-2">Inicio y Autenticación</button>
          </Link>
          <Link to="/" className="md:hidden">
            <button className="border-r px-2">Inicio</button>
          </Link>
        </li>

        <li className="p-1">
          <Link to="/usuarios" className="hidden md:block">
            <button className="border-r px-2 ">Gestión de Usuarios</button>
          </Link>
          <Link to="/usuarios" className="md:hidden">
            <button className="border-r px-2 ">Usuarios</button>
          </Link>
        </li>

        <li className="p-1">
          <Link to="/prestamos" className="hidden md:block">
            <button className="px-2 ">Operaciones de Préstamos</button>
          </Link>

          <Link to="/prestamos" className="md:hidden">
            <button className="px-2 ">Préstamos</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
