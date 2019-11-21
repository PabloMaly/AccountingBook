import { Transaction } from './transaction';

export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    balance: number;
    transactions: Array<Transaction>;
}