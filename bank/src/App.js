import React, { useEffect, useState } from "react";
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
    const [accountId, setAccountId] = useState(0);
    const [filter, setFilter] = useState(null);


    useEffect(() => {
        TaskService.getAllTransferenceByAccountId(accountId, filter)
            .then((result) => {
                if (result instanceof ApiException) {
                    alert(result.message);
                } else {
                    setTotal(result);
                    setExpense(result);
                    setTransactionsList(result);
                }
            });
            setAccountId(null);
            setFilter(null);
        }, []);


    const setDataFilter = (accountId, filter) => {
        setAccountId(accountId);
        setFilter(filter);
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
