import { AppLayout } from "./components/ui/layaouts";
import { InicioYAutenticacion } from "./pages/Pagina1";
import { GestionDeUsuarios } from "./pages/Pagina2";
import { OperacioneDePrestamos } from "../src/pages/Pagina3";

function App() {
  return (
    <AppLayout>
      <InicioYAutenticacion />
      <GestionDeUsuarios />
      <OperacioneDePrestamos />
    </AppLayout>
  );
}

export default App;
