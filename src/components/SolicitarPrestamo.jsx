import { Title, TextInput, Button } from "./ui";
import { prestamoDeFiABI } from "../contracts/ABIs";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { parseEther } from "viem/utils";

export default function SolicitarPrestamo() {
  const [saldoGarantia, setSaldoGarantia] = useState("");
  const [monto, setMonto] = useState("");
  const [plazoDevolucion, setPlazoDevolucion] = useState("");

  const { config } = usePrepareContractWrite({
    address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
    abi: prestamoDeFiABI,
    functionName: "depositarGarantia",
    args: [saldoGarantia, parseEther(monto), plazoDevolucion],
  });

  const { data, write } = useContractWrite(config);

  const {
    isLoading: isTransactionLoading,
    isSuccess: isTransactionSuccess,
    isError: isTransactionError,
  } = useWaitForTransaction({
    hash: data?.hash,
  });

  const handleSaldoGarantiaInputChange = (event) => {
    setSaldoGarantia(event.target.value);
  };
  const handleMonto = (event) => {
    console.log("Weis", parseEther(monto));
    setMonto(event.target.value);
  };
  const handlePlazoDevolucion = (event) => {
    setPlazoDevolucion(event.target.value);
  };

  useEffect(() => {
    if (isTransactionSuccess) {
      toast.success("La transacción se ha ejecutado correctamente");
      setSaldoGarantia("");
    }
    if (isTransactionError) {
      toast.error("La transacción ha fallado");
    }
  }, [isTransactionSuccess, isTransactionError]);

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
      <Title>Solicitar Préstamo</Title>

      <form className="grid gap-1 border-2 rounded-lg">
        <div className="grid gap-3 p-2">
          <TextInput
            type="number"
            placeholder="Paso 1: Deposita Garantía (100% Préstamo Solicitado)"
            label="saldoGarantia"
            value={saldoGarantia}
            onChange={handleSaldoGarantiaInputChange}
          />
        </div>
        <div className="grid p-2">
          <Button
            disabled={!saldoGarantia || isTransactionLoading}
            isLoading={isTransactionLoading}
            onClick={() => write?.()}
          >
            {isTransactionLoading
              ? "Ejecutando transacción"
              : "Depositar Saldo Garantía"}
          </Button>
        </div>
      </form>

      <form className="grid gap-1 border-2 rounded-lg">
        <div className="grid gap-3 p-2">
          <TextInput
            type="number"
            placeholder="Paso 2: Indica Monto en Ether que se Solicita"
            label="monto"
            value={monto}
            onChange={handleMonto}
          />
          <p>{monto}</p>
          <TextInput
            type="number"
            placeholder="Paso 3: Indica Plazo de Devolución (días NATURALES)"
            label="plazoDevolucion"
            value={plazoDevolucion}
            onChange={handlePlazoDevolucion}
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
