import React, { useState } from "react";
import Grid from "../grid";
import * as C from "./styles";

const Form = ({ getData, transactionsList, setTransactionsList }) => {
  const [accountId, setAccountId] = useState(null);
  const [initialFilterDate, setInitialFilterDate] = useState("");
  const [endFilterDate, setEndFilterDate] = useState("");
  const [transferOperationName, setTransferOperationName] = useState("");

  const setFilterParams = () => {

    const filter = {
      initialFilterDate: initialFilterDate,
      endFilterDate: endFilterDate,
      transferOperationName: transferOperationName,
    };

    getData(accountId, filter);

    setAccountId(null)
    setInitialFilterDate("");
    setEndFilterDate("");
    setTransferOperationName("");
  };

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>ID Conta</C.Label>
          <C.Input value={accountId} onChange={(e) => setAccountId(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Data Inicial</C.Label>
          <C.Input
            value={initialFilterDate}
            type="datetime-local"
            onChange={(e) => setInitialFilterDate(e.target.value)}
          />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Data Final</C.Label>
          <C.Input
            value={endFilterDate}
            type="datetime-local"
            onChange={(e) => setEndFilterDate(e.target.value)}
          />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Nome operador transacionado</C.Label>
          <C.Input value={transferOperationName} onChange={(e) => setTransferOperationName(e.target.value)} />
        </C.InputContent>
        <C.Button onClick={setFilterParams}>PESQUISAR</C.Button>
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;