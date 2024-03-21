import { Navbar } from "../components";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-400 to-pink-500 py-2 px-3 flex justify-between items-center border-b shadow ">
      <img
        className="sm:hidden"
        width={47}
        src="/public/blockmaker-small-logo.png"
        alt="blockmaker-mobile-logo"
      />
      <img
        className="hidden sm:block"
        width={300}
        src="/public/blockmaker-logo.png"
        alt="blockmaker-desktop-logo"
      />
      <Navbar />

      <button className="bg-gray-100 rounded px-2 text-sm h-fit ">
        Connect Wallet
      </button>
      
    </header>
  );
}
