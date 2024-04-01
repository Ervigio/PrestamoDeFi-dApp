import { Title, TextInput, Button } from "./ui";
import { prestamoDeFiABI } from "../contracts/ABIs";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export default function AltaPrestamista() {
  const [address, setAddress] = useState("");

  const { config } = usePrepareContractWrite({
    address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
    abi: prestamoDeFiABI,
    functionName: "altaPrestamista",
    enabled: address,
    args: [address],
  });

  const { data, write } = useContractWrite(config);

  const {
    isLoading: isTransactionLoading,
    isSuccess: isTransactionSuccess,
    isError: isTransactionError,
  } = useWaitForTransaction({
    hash: data?.hash,
  });

  const handleAddressInputChange = (event) => {
    setAddress(event.target.value);
  };

  useEffect(() => {
    if (isTransactionSuccess) {
      toast.success("Prestamista dado de alta con éxito");
      setAddress("");
    }
    if (isTransactionError) {
      toast.error(
        "La transacción ha fallado, por favor, revisa los datos de entrada"
      );
    }
  }, [isTransactionSuccess, isTransactionError]);

  return (
    <section className="grid gap-3 px-5 bg-white p-4 border shadow rounded-lg text-sm w-fit">
      <Title>Alta Prestamista</Title>
      <form action="">
        <TextInput
          label="address"
          placeholder="Address Nuevo Empleado Prestamista 0x..."
          onChange={handleAddressInputChange}
          value={address}
        />
      </form>
      <Button
        onClick={() => write?.()}
        disabled={!address || isTransactionLoading}
        isLoading={isTransactionLoading}
      >
        {isTransactionLoading
          ? "Tramitando Alta Nuevo Prestamista"
          : "Alta Prestamista"}
      </Button>
    </section>
  );
}
