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