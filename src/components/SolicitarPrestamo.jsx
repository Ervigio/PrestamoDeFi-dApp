import { Title, TextInput, Button } from "./ui";

export default function SolicitarPrestamo() {
  return (
    <section className="grid gap-3">
      <Title>Solicitar Péstamo</Title>

      <form className="grid gap-3">
        <div className="grid gap-3 border-2 rounded-lg p-2">
          <TextInput />
          <Button>Ingresar Saldo Garantía</Button>
        </div>

        <div className="grid gap-3 border-2 rounded-lg p-2">
          <TextInput />
          <Button>Enviar Solicitud</Button>
        </div>
      </form>
    </section>
  );
}
