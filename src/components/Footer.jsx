export default function Footer() {
  return (
    <footer className="border-t py-4 px-3 flex items-center justify-evenly bg-sky-900">
      <div>
        <p className="text-teal-100 text-xs sm:text-base ">
          Derechos de autor &copy;{new Date().getFullYear()} <br className="lg:hidden"/> Ervigio Javier Díaz
          Díaz
        </p>
      </div>

      <div className="flex items-center gap-3 text-xs sm:text-base ">
        <p className="text-teal-100">
          Trabajo Fin de Máster para <br className="lg:hidden"/>Blockmaker Academy&reg;
        </p>
        <img
          src="./blockmaker-small-logo.png"
          alt="logotipo de Blockmaker Academy"
          width={40}
        />
      </div>
    </footer>
  );
}
