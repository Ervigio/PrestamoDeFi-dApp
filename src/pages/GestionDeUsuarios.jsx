import { AltaPrestamista, AltaCliente } from "../components";

export default function GestionDeUsuarios() {
  return (
    <section className="flex flex-col gap-16 items-center">
      <div className="text-5xl pt-10 font-thin text-center text-sky-950">
        <h2>Gestión de Usuarios</h2>
      </div>
      <div>
        <AltaPrestamista />
      </div>
      <div>
        <AltaCliente />
      </div>
     

    </section>
  );
}
