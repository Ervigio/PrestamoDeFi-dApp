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

export default function DepositarGarantia() {
  const [saldoGarantia, setSaldoGarantia] = useState("");

  const { config } = usePrepareContractWrite({
    address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
    abi: prestamoDeFiABI,
    functionName: "depositarGarantia",
    args: [parseEther(saldoGarantia)],
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
    console.log("Saldo Garantía en Weis: ",parseEther(saldoGarantia));
    setSaldoGarantia(event.target.value);
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

  return (
    <section className="grid gap-3">
      {/*<Title>Depositar Garantía</Title>*/}

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
        <p>{saldoGarantia}</p>
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
    </section>
  );
}
