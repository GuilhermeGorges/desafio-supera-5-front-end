import React, { useState } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/header";
import Resume from "./components/resume";
import Form from "./components/form";
import { TaskService } from "./services/api/tasks/TaskService";
import { ApiException } from "./services/api/ApiException";


const App = () => {
    const [transactionsList, setTransactionsList] = useState([]);
    const [total, setTotal] = useState(0);
    const [expense, setExpense] = useState(0);

    const setDataFilter = (accountId, filter) => {
        TaskService.getAllTransferenceByAccountId(accountId, filter)
            .then((resp) => {
                if (resp instanceof ApiException) {
                    alert(resp.message);
                } else {
                    setTotal(resp.totalAccountBalance);
                    setExpense(resp.totalExtractBalance);
                    setTransactionsList(resp.transferenceList);
                }
            });
    };

    return (
        <>
            <Header />
            <Resume expense={expense} total={total} />
            <Form
                setDataFilter={setDataFilter}
                transactionsList={transactionsList}
                setTransactionsList={setTransactionsList}
            />
            <GlobalStyle />
        </>
    );
};

export default App;
