import { AltaPrestamista, AltaCliente } from "../components";

export default function GestionDeUsuarios() {
  return (
    <div>
      <div className="text-5xl pt-10 font-thin text-center text-sky-950">
        <h2>Gestión de Usuarios</h2>
        <hr />
      </div>
      <section className="flex flex-col pt-10 gap-16 items-center">
        <div>
          <AltaPrestamista />
        </div>
        <div>
          <AltaCliente />
        </div>
      </section>
    </div>
  );
}
