import { Title, TextInput, Button } from "./ui";
import { prestamoDeFiABI } from "../contracts/ABIs";
import {
  usePrepareContractWrite,
  useContractWrite,  
  useWaitForTransaction,
} from "wagmi";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function ReembolsarPrestamo() {
  const [id, setId] = useState("");

  const { config } = usePrepareContractWrite({
    address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
    abi: prestamoDeFiABI,
    functionName: "reembolsarPrestamo",
    args: [id],
  });

  const { data, write } = useContractWrite(config);

  const handleSetIdInputChange = (event) => {
    setId(event.target.value);
  };

  const {
    isLoading: isTransactionLoading,
    isSuccess: isTransactionSuccess,
    isError: isTransactionError,
  } = useWaitForTransaction({
    hash: data?.hash,
  });

  useEffect(() => {
    if (isTransactionSuccess) {
      toast.success("El reembolso se ha realizado con éxito");
      setId("");
    }
    if (isTransactionError) {
      toast.error(
        "El reembolso no ha podido ejecutarse. Por favor, revisa el Id informado"
      );
    }
  }, [isTransactionSuccess, isTransactionError]);

  return (
    <section className="grid gap-3">
      <Title>Reembolsar Préstamo</Title>
      <form className="grid gap-3">
        <div className="grid gap-3 border-2 rounded-lg p-2">
          <TextInput
            type="number"
            placeholder="Indica el ID del Préstamo a Reembolsar"
            onChange={handleSetIdInputChange}
          />
          <Button
            onClick={() => write?.()}
            disabled={isTransactionLoading}
            isLoading={isTransactionLoading}
          >
            {isTransactionLoading
              ? "Traminando Reembolso"
              : "Reembolsar Préstamo"}
          </Button>
        </div>
      </form>
    </section>
  );
}
