import React, { useContext, useEffect, useState } from 'react';
import styles from './../styles/App.module.scss';
import { FetchData } from '../components/FetchData/FetchData';
import { FinanceCard } from '../components/FinanceCard/FinanceCard';
import { SortData } from '../components/SortData/SortData';
import { DataSortContext } from './../components/SortData/context/SortDataContext';
import { ProviderCard } from './../components/ProviderCard/ProviderCard';
import { BalanceCard } from './../components/BalanceCard/BalanceCard';
export const App = () => {
    /* Setting up the state for the app. */
    const [balance, setBalance] = useState({ amount: 0, currency_iso: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [provider, setProvider] = useState({ title: '', account_number: '', sort_code: '', description: '' });
    const [storedTransactions, setStoredTransactions] = useState([]);
    const [transactions, setTransactions] = useState([]);
    /* Getting the sortType from the context. */
    const { sortType } = useContext(DataSortContext);
    /* This is a useEffect hook that is being used to fetch the data from the API. */
    useEffect(() => {
        FetchData()
            .then((res) => {
            setBalance(res.balance);
            setProvider(res.provider);
            setTransactions(res.transactions);
            setStoredTransactions(res.transactions);
        })
            .catch((err) => {
            setError(err);
            console.log(`Code: ${err.code}, Error: ${err.message}`);
        })
            .finally(() => setLoading(false));
    }, []);
    /* Sorting the data based on the sortType. */
    useEffect(() => {
        switch (sortType) {
            case 'ASC':
                const sortASC = transactions.slice(0);
                sortASC.sort((a, b) => {
                    return b.amount.value - a.amount.value;
                });
                setTransactions(sortASC);
                break;
            case 'DESC':
                const sortDESC = transactions.slice(0);
                sortDESC.sort((a, b) => {
                    return a.amount.value - b.amount.value;
                });
                setTransactions(sortDESC);
                break;
            case 'RESET':
                setTransactions(storedTransactions);
            default:
                setTransactions(storedTransactions);
        }
    }, [sortType, storedTransactions]);
    /* This is a conditional statement that is checking if the loading state is true. If it is, it will
    return a div with the className of loading and the text of Loading... */
    if (loading)
        return <div className="loading">Loading...</div>;
    /* This is a conditional statement that is checking if the error state is greater than 0. If it is, it
    will
    return a div with the className of error and the text of There has been an error loading in your
    data. See below for more information. and the error state. */
    if (error.length > 0)
        return (<div className="error">
      <p>There has been an error loading in your data. See below for more information.</p>
      <p>{error}</p>
    </div>);
    return (<div className={styles.container}>
      <div className={styles.header}>
        <h1>Finance App</h1>
        <h2>Your home for financial security</h2>
      </div>
      <BalanceCard balance={balance}/>
      <ProviderCard providerInfo={provider}/>
      <SortData />
      <div className={styles.cards}>
        {transactions.map((transaction, index) => (<FinanceCard key={index} transaction={transaction}/>))}
      </div>
    </div>);
};
