import { Title, TextInput, Button } from "./ui";
import { prestamoDeFiABI } from "../contracts/ABIs";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export default function SolicitarPrestamos() {
  const [monto, setMonto] = useState("");
  const [plazoDevolucion, setPlazoDevolucion] = useState("");

  const { config } = usePrepareContractWrite({
    address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
    abi: prestamoDeFiABI,
    functionName: "solicitarPrestamos",
    args: [BigInt(monto * 10 ** 18), plazoDevolucion]
  });

  const { data, write } = useContractWrite(config);

  const {
    isLoading: isTransactionLoading,
    isSuccess: isTransactionSuccess,
    isError: isTransactionError,
  } = useWaitForTransaction({
    hash: data?.hash,
  });

  const handleMontoInputChange = (event) => {
    console.log("Monto en Weis", BigInt(monto * 10 ** 18));
    setMonto(event.target.value);
  };
  const handlePlazoDevolucionInputChange = (event) => {
    setPlazoDevolucion(event.target.value);
  };

  useEffect(() => {
    if (isTransactionSuccess) {
      toast.success("La transacción se ha ejecutado correctamente");
      setMonto("");
      setPlazoDevolucion("");
    }
    if (isTransactionError) {
      toast.error("La transacción ha fallado");
    }
  }, [isTransactionSuccess, isTransactionError]);

  return (
    <section className="grid gap-3">
      {/*<Title>Solicitar Préstamo</Title>*/}

      <form className="grid gap-1 border-2 rounded-lg">
        <div className="grid gap-3 p-2">
          <TextInput
            type="number"
            placeholder="Paso 2: Indica Monto en Ether que se Solicita"
            label="monto"
            value={monto}
            onChange={handleMontoInputChange}
          />
          <p>{monto}</p>
          <TextInput
            type="number"
            placeholder="Paso 3: Indica Plazo de Devolución (días NATURALES)"
            label="plazoDevolucion"
            value={plazoDevolucion}
            onChange={handlePlazoDevolucionInputChange}
          />
        </div>
        <div className="grid p-2">
          <Button
            disabled={!monto || !plazoDevolucion || isTransactionLoading}
            isLoading={isTransactionLoading}
            onClick={() => write?.()}
          >
            {isTransactionLoading
              ? "Estamos Gestionando su Solucitud"
              : "Enviar Solucitud"}
          </Button>
        </div>
      </form>
    </section>
  );
}
