export default function OperacionesDePrestamos() {
  return (
    <div>
      <div className="text-5xl p-5 gap-6 font-thin text-center text-sky-950">
        <h2>Operaciones de Préstamos</h2>
        <hr />
      </div>

      <div className="flex justify-evenly">
        {/*Clientes*/}

        <section className="grid gap-10 items-center">
          <div>
            
            <p>Componente Solicitar Préstamo</p>
          </div>

          <div>
            <p>Componente Reembolsar Préstamo</p>
          </div>

          <div>
            <p>Componente Préstamos Clientes</p>
          </div>
        </section>

        {/*EmpleadoPrestamista*/}

        <section className="grid gap-10 items-center">
          <div>
            <p>Componente Aprobar Préstamo</p>
          </div>

          <div>
            <p>Componente Liquidar Garantía</p>
          </div>
          <div>
            <p>Componente Préstamos Clientes</p>
          </div>
        </section>
      </div>
    </div>
  );
}
