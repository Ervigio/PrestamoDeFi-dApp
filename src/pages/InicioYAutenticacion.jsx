import Home from "./Home";
import { useAccount } from "wagmi";

export default function InicioYAutenticacion() {
  const { address, isConnecting, isDisconnected } = useAccount();

  <Home />;

  if (isConnecting)
    return (
      <div className="bg-gradient-to-r from-sky-600 to-cyan-200 text-right">
        Connecting...
      </div>
    );
  if (isDisconnected)
    return (
      <div className="px-7 bg-gradient-to-r from-sky-600 to-cyan-200  text-violet-600 text-right">
        Disconnected
      </div>
    );
  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-200 font-semibold text-green-500 text-right">      
      <p className="md:hidden text-xs">Connected: {address}</p>
      <p className="hidden sm:block">Connected Wallet: {address}</p>
    </div>
    
  );
}
