import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Pagina1">Página1</Link>
        </li>
        <li>
          <Link to="/Pagina2">Página2</Link>
        </li>
        <li>
          <Link to="/Pagina3">Página3</Link>
        </li>
      </ul>
    </nav>
  );
}
