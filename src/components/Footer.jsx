export default function Footer() {
  return (
    <footer className="border-t py-4 px-3 flex items-center justify-around bg-emerald-700 shadow">
      <p>
        Derechos de autor &copy;{new Date().getFullYear()} Ervigio Javier Díaz Díaz        
      </p>
      <div className="flex items-center">
      <p>Trabajo de fin de Máster para Blockmaker Academy&reg;</p>
      <img src="./blockmaker-small-logo.png" alt="logotipo de Blockmaker Academy" width={40}/>
      </div>

    </footer>
  );
}
