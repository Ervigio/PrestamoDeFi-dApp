import { SolicitarPrestamo } from "../components";

export default function OperacionesDePrestamos() {
  return (
    <div>
      <div className="text-5xl p-5 gap-6 font-thin text-center text-sky-950">
        <h2>Operaciones de Préstamos</h2>
        <hr />
      </div>

      <div className="flex justify-evenly h-[85vh]">
        {/*Clientes*/}
        <div>
          <section className="grid gap-10 place-items-center">
            <div className="grid gap-3 px-5 bg-white p-4 border shadow rounded-lg text-sm w-fit">
              <SolicitarPrestamo />
            </div>

            <div className="grid gap-3 px-5 bg-white p-4 border shadow rounded-lg text-sm w-fit">
              <p>Componente Reembolsar Préstamo</p>
            </div>

            <div className="grid gap-3 px-5 bg-white p-4 border shadow rounded-lg text-sm w-fit">
              <p>Componente Préstamos Clientes</p>
            </div>
          </section>
        </div>

        {/*EmpleadoPrestamista*/}
        <div>
          <section className="grid gap-10 items-center">
            <div className="grid gap-3 px-5 bg-white p-4 border shadow rounded-lg text-sm w-fit">
              <p>Componente Aprobar Préstamo</p>
            </div>

            <div className="grid gap-3 px-5 bg-white p-4 border shadow rounded-lg text-sm w-fit">
              <p>Componente Liquidar Garantía</p>
            </div>
            <div className="grid gap-3 px-5 bg-white p-4 border shadow rounded-lg text-sm w-fit">
              <p>Componente Préstamos Clientes</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
