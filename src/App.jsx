import { AppLayout, Rutas } from "./components/ui/layaouts";
import { WagmiConfig } from "wagmi";
import { ConnectKitProvider } from "connectkit";

import { config } from "./config/wagmi";
import { InicioYAutenticacion } from "./pages";

function App() {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider mode="auto">
        <AppLayout>
          <Rutas />
          <InicioYAutenticacion />
        </AppLayout>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default App;
