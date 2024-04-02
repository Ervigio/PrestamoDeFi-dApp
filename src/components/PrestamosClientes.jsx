import { Title, TextInput, Button } from "./ui";

export default function PrestamosClientes() {
  return (
    <section className="grid gap-3">
      <Title>Consulta tus Préstamos</Title>

      <form className="grid gap-3">
        <div className="grid gap-3 border-2 rounded-lg p-2">
          <TextInput />
          <Button>Consultar</Button>
        </div>
      </form>
    </section>
  );
}
