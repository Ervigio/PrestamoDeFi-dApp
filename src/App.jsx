import { AppLayout } from "./components/ui/layaouts";
import {
  InicioYAutenticacion,
  GestionDeUsuarios,
  OperacioneDePrestamos,
} from "./pages";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<InicioYAutenticacion />} />
        <Route path="/usuarios" element={<GestionDeUsuarios />} />
        <Route path="/prestamos" element={<OperacioneDePrestamos />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
