import { Title } from "../components/ui";

export default function Home() {
  return (
    <div className="grid gap-6 ">
      <h1 className="text-5xl p-5  font-thin text-center text-sky-950">
        Préstamo DeFi
      </h1>
      <hr />

      <section className="flex flex-col gap-16 items-center">
        <div className="grid gap-3 px-5 bg-white p-4 border shadow rounded-lg w-72 sm:min-w-[40vw]">
          <div>
            <div>
              <Title>Finanzas Descentralizadas</Title>
            </div>

            <p className="py-3 text-xs sm:text-sm ">
              Finanzas descentralizadas, comúnmente conocidas como «DeFi», es el
              término que se utiliza para describir un sistema de servicios
              financieros basado en la cadena de bloques que elimina la
              necesidad de que las agencias gubernamentales aprueben las
              transacciones.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-16 items-center">
        <div className="grid gap-3 px-5 bg-white p-4 border shadow rounded-lg text-sm w-72 sm:min-w-[40vw]">
          <div>
            <div>
              <Title>
                Al margen de la Banca Tradicional. Banca para todos.
              </Title>
            </div>

            <p className="py-3 text-xs sm:text-sm ">
              No todo el mundo puede acceder a los servicios financieros. Sin
              embargo, todo lo que necesita para acceder a Ethereum y a los
              productos de préstamos, toma de préstamos y ahorros integrados en
              Ethereum es una conexión a Internet.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-16 items-center">
        <div className="grid gap-3 px-5 bg-white p-4 border shadow rounded-lg text-sm w-72 sm:min-w-[40vw]">
          <div>
            <div>
              <Title>Tecnología Blokchain. </Title>
            </div>

            <p className="py-3 text-xs sm:text-sm ">
              Cualquiera puede interactuar con la red Ethereum o construir
              aplicaciones en ella. Esto le permite controlar sus propios
              activos e identidad, en lugar de estar controlados por unas
              cuantas megacorporaciones.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
