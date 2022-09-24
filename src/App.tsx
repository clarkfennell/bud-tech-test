import React, { useContext, useEffect, useState } from 'react';
import './../styles/App.module.scss';
import { FetchData } from'../components/FetchData/FetchData';
import { FinanceCard } from '../components/FinanceCard/FinanceCard';
import { SortData } from '../components/SortData/SortData';
import { DataSortContext } from './../components/SortData/context/SortDataContext';
import { ProviderCard } from './../components/ProviderCard/ProviderCard';
import { BalanceCard } from './../components/BalanceCard/BalanceCard';

export const App = () => {
  const [balance, setBalance] = useState<{ amount: number, currency_iso: string }>({ amount: 0, currency_iso: '' })
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [provider, setProvider] = useState<{ title: string, account_number: string, sort_code: string, description: string }>({ title: '', account_number: '', sort_code: '', description: '' });
  const [storedTransactions, setStoredTransactions] = useState<[]>([]);
  const [transactions, setTransactions] = useState<[]>([]);

  const { sortType } = useContext(DataSortContext);

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
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    switch (sortType) {
      case 'ASC':
        const sortASC: any = transactions.slice(0);
        sortASC.sort((a: { amount: { value: number } }, b: { amount: { value: number } }) => {
          return b.amount.value - a.amount.value;
        })
        setTransactions(sortASC);
      break;
      case 'DESC':
        const sortDESC: any = transactions.slice(0);
        sortDESC.sort((a: { amount: { value: number } }, b: { amount: { value: number } }) => {
          return a.amount.value - b.amount.value;
        })
        setTransactions(sortDESC);
      break;
      case 'RESET':
        setTransactions(storedTransactions);
      default:
        setTransactions(storedTransactions);
    }
  }, [sortType, storedTransactions]);

  if (loading) return <div className="loading">Loading...</div>

  if (error.length > 0) return (
    <div className="error">
      <p>There has been an error loading in your data. See below for more information.</p>
      <p>{error}</p>
    </div>
  )

  return (
    <div className="container">
      <h1>Finance App</h1>
      <h2>Your home for financial security</h2>
      <BalanceCard balance={balance} />
      <ProviderCard providerInfo={provider} />
      <SortData />
      <div className="container_cards">
        {transactions.map((transaction, index) => (
          <FinanceCard key={index} transaction={transaction} />
        ))}
      </div>
    </div>
  )
}