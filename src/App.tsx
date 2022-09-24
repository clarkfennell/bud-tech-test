import React, { useContext, useEffect, useState } from 'react';
import './../styles/App.module.scss';
import { FetchData } from'../components/FetchData/FetchData';
import { FinanceCard } from '../components/FinanceCard/FinanceCard';
import { SortData } from '../components/SortData/SortData';
import { DataSortContext } from '../components/SortData/context/SortDataContext';
import { ContextExclusionPlugin } from 'webpack';

export const App = () => {
  const [balance, setBalance] = useState<[{ amount: number, currency_iso: string }]>([{ amount: 0, currency_iso: '' }])
  const [provider, setProvider] = useState<[{ title: string, account_number: string, sort_code: string, description: string }]>([{ title: '', account_number: '', sort_code: '', description: '' }]);
  const [transactions, setTransactions] = useState<[]>([]);
  const [storedTransactions, setStoredTransactions] = useState<[]>([]);

  const { sortType } = useContext(DataSortContext);

  useEffect(() => {
    FetchData()
      .then((res) => {
        setBalance(res.balance);
        setProvider(res);
        setTransactions(res.transactions);
        setStoredTransactions(res.transactions);
      })
      .catch((err) => console.log(`Cannot fetch API! ` + err.message))
  }, [])

  useEffect(() => {
    switch (sortType) {
      case 'ASC':
        const sortASC: any = transactions.slice(0);
        sortASC.sort((a: { amount: { value: number } }, b: { amount: { value: number } }) => {
          return a.amount.value - b.amount.value;
        })
        setTransactions(sortASC);
      break;
      case 'DESC':
        const sortDESC: any = transactions.slice(0);
        sortDESC.sort((a: { amount: { value: number } }, b: { amount: { value: number } }) => {
          return b.amount.value - a.amount.value;
        })
        setTransactions(sortDESC);
      break;
      case 'RESET':
        setTransactions(storedTransactions);
      default:
        setTransactions(storedTransactions);
    }
  }, [sortType, storedTransactions]);

  return (
    <div className="container">
      <h1>Finance App</h1>
      <h2>Your home for financial security</h2>
      <div className="container_provider">

      </div>
      <div className="container_balance">

      </div>
      <SortData />
      <div className="container_cards">
        {transactions.map((transaction, index) => (
          <FinanceCard key={index} transaction={transaction} />
        ))}
      </div>
    </div>
  )
}