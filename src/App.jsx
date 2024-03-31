import { AppLayout, Rutas } from "./components/ui/layaouts";
import { WagmiConfig } from "wagmi";
import { ConnectKitProvider } from "connectkit";

import { config } from "./config/wagmi";
import { InicioYAutenticacion } from "./pages";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <WagmiConfig config={config}>
      <Toaster position="bottom-right" />
      <ConnectKitProvider mode="auto">
        <AppLayout>
          <InicioYAutenticacion />
          <Rutas />
        </AppLayout>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default App;
