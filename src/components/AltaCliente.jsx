import { Title, TextInput, Button } from "./ui";

export default function AltaCliente() {
  return (
    <section className="grid gap-3 px-5 bg-white p-4 border shadow rounded-lg text-sm w-fit">
      <Title>Alta Cliente</Title>
      <form action="">
        <TextInput
          label="Address"
          placeholder="Address Nuevo Cliente 0x..."
          type="string"
        />
      </form>
      <Button>Alta Cliente</Button>
    </section>
  );
}
