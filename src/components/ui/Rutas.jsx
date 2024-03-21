import { Route, Routes } from "react-router-dom";
import InicioYAutenticacion from "../../pages/Pagina1/InicioYAutenticacion";
import GestionDeUsuarios from "../../pages/Pagina2/GestionDeUsuarios";
import OperacioneDePrestamos from "../../pages/Pagina3/OperacioneDePrestamos";
import { Home } from "../../pages/subpage1";

export default function Rutas() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="../../pages/Pagina1" element={<InicioYAutenticacion />} />
      <Route path="../../pages/Pagina2" element={<GestionDeUsuarios />} />
      <Route path="../../pages/Pagina3" element={<OperacioneDePrestamos />} />
    </Routes>
  );
}
