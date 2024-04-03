import { Title, TextInput, Button } from "./ui";

export default function AprobarPrestamo() {
  return (
    <section className="grid gap-3">
      <Title>Aprobar Préstamo</Title>

      <form className="grid gap-1 border-2 rounded-lg">
        <div className="grid gap-3 p-2">
          <TextInput
            type="texto"
            placeholder="Introduce dirección Monedero Solicitante (0x.....)"
          />
          <TextInput
            type="number"
            placeholder="Indica el Monto en Ether Aprobado"
          />
        </div>
        <div className="grid p-2">
          <Button>Aprobar Préstamo</Button>
        </div>
      </form>
    </section>
  );
}
