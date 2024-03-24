import { Navbar } from "../components";
import { ConnectKitButton } from "connectkit";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-sky-600 to-cyan-200 py-2 px-3 flex justify-between items-center border-b shadow-md">
      <img
        className="sm:hidden"
        width={47}
        src="/ms-icon-310x310.png"
        alt="blockmaker-mobile-logo"
      />
      <img
        className="hidden sm:block"
        width={200}
        src="/ERVPrestamoDefi.png"
        alt="blockmaker-desktop-logo"
      />
      <Navbar />
      <ConnectKitButton showBalance />
    </header>
  );
}
