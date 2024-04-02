import { Title, TextInput, Button } from "./ui";

export default function SolicitarPrestamo() {
  return (
    <section className="grid gap-3">
      <Title>Solicitar Péstamo</Title>

      <form className="grid gap-1 border-2 rounded-lg">
        <div className="grid gap-3 p-2">
          <TextInput
            type="number"
            placeholder="Paso 1: Deposita Garantía (100% Préstamo Solicitado)"
          />
        </div>
        <div className="grid p-2">
          <Button>Depositar Saldo Garantía</Button>
        </div>
      </form>

      <form className="grid gap-1 border-2 rounded-lg">
        <div className="grid gap-3 p-2">
          <TextInput
            type="number"
            placeholder="Paso 2: Indica Monto en Ether que se Solicita"
          />
          <TextInput
            type="number"
            placeholder="Paso 3: Indica Plazo de Devolución (días NATURALES)"
          />
        </div>
        <div className="grid p-2">
          <Button>Enviar Solicitud</Button>
        </div>
      </form>
    </section>
  );
}
