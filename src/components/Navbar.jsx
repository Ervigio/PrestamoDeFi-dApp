import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav >
      <ul className="flex justify-center">
        <li className="p-1">
          <Link to="/" className="hidden lg:block">
            <button className="border-r px-2">Inicio y Autenticación</button>
          </Link>
          <Link to="/" className="lg:hidden">
            <button className="border-r px-2">Inicio</button>
          </Link>
        </li>

        <li className="py-1">
          <Link to="/usuarios" className="hidden lg:block">
            <button className="border-r px-2 ">Gestión de Usuarios</button>
          </Link>
          <Link to="/usuarios" className="lg:hidden">
            <button className="border-r px-2 ">Usuarios</button>
          </Link>
        </li>

        <li className="py-1">
          <Link to="/prestamos" className="hidden lg:block">
            <button className="px-2 ">Operaciones de Préstamos</button>
          </Link>

          <Link to="/prestamos" className="lg:hidden">
            <button className="px-2 ">Préstamos</button>
          </Link>
        </li>
      </ul>
    </nav>    
  );
}
