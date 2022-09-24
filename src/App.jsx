import React, { useEffect, useState } from 'react';
import './../styles/App.module.scss';
import { FetchData } from '../components/FetchData/FetchData';
import { FinanceCard } from '../components/FinanceCard/FinanceCard';
export const App = () => {
    const [balance, setBalance] = useState([{ amount: 0, currency_iso: '' }]);
    const [provider, setProvider] = useState([{ title: '', account_number: '', sort_code: '', description: '' }]);
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        FetchData()
            .then((res) => {
            setBalance(res.balance);
            setProvider(res);
            setTransactions(res.transactions);
        })
            .catch((err) => console.log(`Cannot fetch API! ` + err.message));
    }, []);
    return (<div className="container">
      <h1>Hello World!</h1>
      <div className="container_cards">
        {transactions.map((transaction, index) => (<FinanceCard key={index} transaction={transaction}/>))}
      </div>
    </div>);
};
