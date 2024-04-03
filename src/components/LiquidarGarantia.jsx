//
import { Title, TextInput, Button } from "./ui";

export default function LiquidarGarantia() {
  return (
    <section className="grid gap-3">
      <Title>Liquidar Garantía</Title>

      <form className="grid gap-1 border-2 rounded-lg">
        <div className="grid gap-3 p-2">
          <TextInput
            type="texto"
            placeholder="Introduce dirección Monedero Prestatario (0x.....)"
          />
          <TextInput
            type="number"
            placeholder="Introduce el ID del Préstamo a Liquidar"
          />
        </div>
        <div className="grid p-2">
          <Button>Liquidar Garantía</Button>
        </div>
      </form>
    </section>
  );
}
