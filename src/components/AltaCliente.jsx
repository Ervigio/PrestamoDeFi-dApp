import { Title, TextInput, Button } from "./ui";
import { prestamoDeFiABI } from "../contracts/ABIs";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export default function AltaCliente() {
  const [clientAddress, setClientAddress] = useState("");

  const { address } = useAccount();

  const { data } = useContractRead({
    address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
    abi: prestamoDeFiABI,
    functionName: "altaCliente",
  });

  const isLenderEmployee = address === data;

  const { config } = usePrepareContractWrite({
    address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
    abi: prestamoDeFiABI,
    functionName: "altaCliente",
    enabled: clientAddress,
    args: [clientAddress],
  });

  const { data: writeData, write } = useContractWrite(config);

  const {
    isLoading: isTransactionLoading,
    isSuccess: isTransactionSuccess,
    isError: isTransactionError,
  } = useWaitForTransaction({
    hash: writeData?.hash,
  });

  const handleClientAddressInputChange = (event) => {
    setClientAddress(event.target.value);
  };

  useEffect(() => {
    if (isTransactionSuccess) {
      toast.success("Cliente dado de alta con éxito");
      setClientAddress("");
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
          type="text"
          placeholder="Address Nuevo Cliente 0x..."
          label="clientAddress"
          value={clientAddress}
          disabled={!isLenderEmployee || isTransactionLoading}
          onChange={handleClientAddressInputChange}
        />
      </form>
      <Button
        disabled={!clientAddress || !isLenderEmployee || isTransactionLoading}
        isLoading={isTransactionLoading}
        onClick={() => write?.()}
      >
        {isLenderEmployee
          ? isTransactionLoading
            ? "Tramitando Alta Nuevo Cliente"
            : "Alta Cliente"
          : "Operación reservada a los Empleados Prestamistas"}
      </Button>
    </section>
  );
}
