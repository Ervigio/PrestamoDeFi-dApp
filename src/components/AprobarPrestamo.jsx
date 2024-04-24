import { Title, TextInput, Button } from "./ui";
import { prestamoDeFiABI } from "../contracts/ABIs";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export default function AprobarPrestamo() {
  const [address, setAddress] = useState("");
  const [id, setId] = useState("");

  const { config } = usePrepareContractWrite({
    address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
    abi: prestamoDeFiABI,
    functionName: "aprobarPrestamo",
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
      toast.success("El préstamo ha sido aprobado exitosamente");
      setAddress("");
    }
    if (isTransactionError) {
      toast.error(
        "No se ha podidoaprobar el préstamo. Por favor, revisa los datos introducidos"
      );
    }
  }, [isTransactionSuccess, isTransactionError]);

  return (
    <section className="grid gap-3">
      <Title>Aprobar Préstamo</Title>

      <form className="grid gap-1 border-2 rounded-lg">
        <div className="grid gap-3 p-2">
          <TextInput
            type="texto"
            placeholder="Introduce dirección Monedero Solicitante (0x.....)"
            onChange={handleAddressInputChange}
          />
          <TextInput
            type="number"
            placeholder="Indica el Monto en Ether Aprobado"
            onChange={handleIdInputChange}
          />
        </div>
        <div className="grid p-2">
          <Button
            onClick={() => write?.()}
            disabled={!address || !id || isTransactionLoading}
            isLoading={isTransactionLoading}
          >
            {isTransactionLoading
              ? "Aprobación en curso..."
              : "Aprobar Préstamo"}
          </Button>
        </div>
      </form>
    </section>
  );
}
