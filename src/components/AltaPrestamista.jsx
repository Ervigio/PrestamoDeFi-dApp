import { Title, TextInput, Button } from "./ui";
import { prestamoDeFiABI } from "../contracts/ABIs";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { useState } from "react";

export default function AltaPrestamista() {
  const [address, setAddress] = useState("");

  const { config } = usePrepareContractWrite({
    address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
    abi: prestamoDeFiABI,
    functionName: "altaPrestamista",
    args: [address],
  });

  const { data, write } = useContractWrite(config);

  const handleAddressInputChange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <section className="grid gap-3 px-5 bg-white p-4 border shadow rounded-lg text-sm w-fit">
      <Title>Alta Prestamista</Title>
      <form action="">
        <TextInput
          label="address"
          placeholder="Address Nuevo Empleado Prestamista 0x..."
          onChange={handleAddressInputChange}
        />
      </form>
      <Button onClick={() => write?.()}>Alta Prestamista</Button>
      <p></p>
    </section>
  );
}
