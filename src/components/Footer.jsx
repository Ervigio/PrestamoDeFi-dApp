export default function Footer() {
  return (
    <footer className="border-t py-4 px-3 flex items-center justify-around bg-sky-900 md:tex-xs">
      <div>
        <p className="text-teal-100">
          Derechos de autor &copy;{new Date().getFullYear()} Ervigio Javier Díaz
          Díaz
        </p>
      </div>

      <div className="flex items-center">
        <p className="text-teal-100">
          Trabajo de Fin de Máster para Blockmaker Academy&reg;
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
