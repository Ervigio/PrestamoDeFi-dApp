import { Title, TextInput, Button } from "./ui";
import { prestamoDeFiABI } from "../contracts/ABIs";

import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { useState } from "react";

export default function AltaPrestamista() {
  const [nuevoPrestamistaAddres, setNuevoPrestamistaAddres] = useState("");

  const { config } = usePrepareContractWrite({
    address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
    abi: prestamoDeFiABI,
    functionName: "altaPrestamista",
    args: [nuevoPrestamistaAddres],
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  const handleNuevoPrestamistaAddressInputChange = (event) => {
    setNuevoPrestamistaAddres(event.target.value);
  };

  return (
    <section className="grid gap-3 px-5 bg-white p-4 border shadow rounded-lg text-sm w-fit">
      <Title>Alta Prestamista</Title>
      <form action="">
        <TextInput
          label="Address"
          placeholder="Address Nuevo Empleado Prestamista 0x..."
          type="string"
          onChange={handleNuevoPrestamistaAddressInputChange}
        />
      </form>
      <Button onClick={() => write?.()}>Alta Prestamista</Button>
      <p></p>
    </section>
  );
}
