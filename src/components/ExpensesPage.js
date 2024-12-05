import Header from "./Header";
import Balance from "./Balance";
import IncomeExpenses from "./incomeExpenses";
import AddTransaction from "./AddTransaction";
import TransactionList from "./TransactionList";

export const ExpensesPage = () => {
    return(
        <>
            <Header/>
            <Balance/>
            <IncomeExpenses/>
            <TransactionList/>
            <AddTransaction/>
        </>
    )
}