import { LoadingSpinner, Button, ErrorInfo, TextInput, Title } from "../components/ui";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-5xl p-5  font-thin text-center text-sky-950">
        Préstamo DeFi
      </h1>
      <hr />
      <div>
        <p className="p-5 text-sky-700">
          ¿Qué significa la palabra DeFi? <br />
          Finanzas descentralizadas, comúnmente conocidas como «DeFi», es el
          término que se utiliza para describir un sistema de servicios
          financieros basado en la cadena de bloques que elimina la necesidad de
          que las agencias gubernamentales aprueben las transacciones.
        </p>
      </div>

      <div>
        <LoadingSpinner className="h-8 w-8" />
      </div>
      <div>
        <Button disabled={false}>Alta Prestamista</Button>
      </div>
      <div>
        <ErrorInfo message="Error: Internal Server Error" />
      </div>
      <div>
        <TextInput placeholder="Introduce los datos" disabled={false}/>
      </div>
      <div>
        <Title>Título de este componente</Title>
      </div>
    </div>
  );
}
