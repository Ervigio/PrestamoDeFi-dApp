import { Title, TextInput, Button } from "./ui";

export default function ReembolsarPrestamo() {
  return (
    <section className="grid gap-3">
      <Title>Reembolsar Préstamo</Title>

      <form className="grid gap-3">
        <div className="grid gap-3 border-2 rounded-lg p-2">
          <TextInput
            type="number"
            placeholder="Indica el ID del Préstamo a Reembolsar"
          />
          <Button>Reembolsar Préstamo</Button>
        </div>
      </form>
    </section>
  );
}
