import { Title, TextInput, Button } from "./ui";
import { prestamoDeFiABI } from "../contracts/ABIs";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export default function LiquidarGarantia() {
  const [address, setAddress] = useState("");
  const [id, setId] = useState("");

  const { config } = usePrepareContractWrite({
    address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
    abi: prestamoDeFiABI,
    functionName: "liquidarGarantia",
    args: [address, id],
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
  const handleIdInputChange = (event) => {
    setId(event.target.value);
  };

  useEffect(() => {
    if (isTransactionSuccess) {
      toast.success("El depósito de garantía se ha liquidado exitosamente");
      setAddress("");
    }
    if (isTransactionError) {
      toast.error(
        "No se ha podido liquidar el depósito de garantía. Por favor, revisa los datos introducidos"
      );
    }
  }, [isTransactionSuccess, isTransactionError]);

  return (
    <section className="grid gap-3">
      <Title>Liquidar Garantía</Title>

      <form className="grid gap-1 border-2 rounded-lg">
        <div className="grid gap-3 p-2">
          <TextInput
            type="texto"
            placeholder="Introduce dirección Monedero Prestatario (0x.....)"
            onChange={handleAddressInputChange}
          />
          <TextInput
            type="number"
            placeholder="Introduce el ID del Préstamo a Liquidar"
            onChange={handleIdInputChange}
          />
        </div>
        <div className="grid p-2">
          <Button
            onclick={() => write?.()}
            disabled={!address || !id || isTransactionLoading}
            isLoading={isTransactionLoading}
          >
            {isTransactionLoading? "Liquidando el Depósito de Garantía":"Liquidar Depósito de Garantía"}
          </Button>
        </div>
      </form>
    </section>
  );
}
