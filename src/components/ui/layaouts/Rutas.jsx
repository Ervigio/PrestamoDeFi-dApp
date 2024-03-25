import { Route, Routes } from "react-router-dom";
import {
  InicioYAutenticacion,
  GestionDeUsuarios,
  OperacionesDePrestamos,
} from "../../../pages";
import { Home } from "./../../../pages";

export default function Rutas() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<InicioYAutenticacion />} />
      <Route path="usuarios" element={<GestionDeUsuarios />} />
      <Route path="prestamos" element={<OperacionesDePrestamos />} />
    </Routes>
  );
}
