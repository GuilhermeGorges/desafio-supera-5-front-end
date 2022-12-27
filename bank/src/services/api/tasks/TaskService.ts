import { ApiException } from "../ApiException";
import { Api } from "../ApiConfig";

export interface BankTransaction {
    transferencesList: Array<Object>;
    totalBalance: Number;
}
export interface Transference {
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

const getAllTransferenceByAccountId = async (account: Number, filter: Object): Promise<BankTransaction | ApiException> => {
    try{
        const { data } = await Api().get(`/transference/${account}`, filter);
        return data;
    } catch (err: any) {
        return new ApiException(err.message || 'Erro ao consultar a API.');
    }
};

export const TaskService = {
    getAllTransferenceByAccountId
};
