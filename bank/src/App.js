import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/header";
import Resume from "./components/resume";
import Form from "./components/form";
import { TaskService } from "./services/api/tasks/TaskService";

interface Transference {
    data: Data;
    valo: Number;
    tipo: String;
    operadorTransicionado: String;
}

const App = () => {
  const data = [Object];
  const [transactionsList, setTransactionsList] = useState<[Transference]>([]);
  const [total, setTotal] = useState(0);
  const [expense, setExpense] = useState(0);

    useEffect(() => {
        TaskService.getAllTransferenceByAccountId()
    }, []);


  const getData = (accountId, filter) => {
   // data = getAllTransferenceByAccountId(accountId, filter);

    const transferenceList = [Transference];
    setTotal();
    setExpense();
    setTransactionsList(transferenceList);
  };

  return (
    <>
      <Header />
      <Resume expense={expense} total={total} />
      <Form
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
      <GlobalStyle />
    </>
  );
};

export default App;
