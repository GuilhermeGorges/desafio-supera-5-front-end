import { Api } from "../ApiConfig";
import { ApiExeption } from "../ApiExeption";

interface BankTransaction {
    transferencesList: Array<Transference>;
    totalBalance: Number;
}

interface Transference {
    id: Number;
    value: Number;
    transferenceDate: Date;
    type: String;
    transferOperationName: String;
    account: Account;
}

interface Account {
    id: Number;
    name: String;
}

const getAllTransferenceByAccountId = async (account: Number, filter: Object): Promise<BankTransaction | ApiExeption> => {
    try{

        const { data } = await Api().get(`/transference/${account}`, filter);
        return data;
    } catch (err: any) {
        return new ApiExeption(err.message || 'Erro ao consultar a API.');
    }
};

export const TaskService = {
    getAllTransferenceByAccountId
};