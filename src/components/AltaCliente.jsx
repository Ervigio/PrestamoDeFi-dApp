import { Title, TextInput, Button } from "./ui";
import { prestamoDeFiABI } from "../contracts/ABIs";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export default function AltaCliente() {
  const [address, setAddress] = useState(" ");

  const { config } = usePrepareContractWrite({
    address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
    abi: prestamoDeFiABI,
    functionName: "altaCliente",
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

  // Para recoger el valor del input en la sección Alta Cliente
  const handleAddressInputChange = (event) => {
    setAddress(event.target.value);
  };

  useEffect(() => {
    if (isTransactionSuccess) {
      toast.success("La transacción se ha completado con éxito");
      setAddress(" ");
    }
    if (isTransactionError) {
      toast.error("La transacción se ha fallado");
    }
  }, [isTransactionSuccess, isTransactionError]);

  return (
    <section className="grid gap-3 px-5 bg-white p-4 border shadow rounded-lg text-sm w-fit">
      <Title>Alta Cliente</Title>
      <form action="">
        <TextInput
          label="address"
          placeholder="Address Nuevo Cliente 0x..."
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
          ? "Gestionando Alta Nuevo Cliente"
          : "Alta Cliente"}
      </Button>
    </section>
  );
}
