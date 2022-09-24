import React, { useState } from "react";
import './FinanceCard.module.scss';

type Props = {
  transaction: {
    amount: {
      value: number,
      currency_iso: string,
    }
    category_title: string,
    date: string,
    description: string,
    id: string,
  },
}

export const FinanceCard = ({ transaction }: Props) => {
  const [currencyType, setCurrencyType] = useState<string>('');

  switch (transaction.amount.currency_iso) {
    case 'EUR':
      () => setCurrencyType('€')
      break;
    case 'GBP':
      () => setCurrencyType('£')
      break;
    case 'USD':
      () => setCurrencyType('$')
      break;
    default:
      () => setCurrencyType('£')
  }

  return (
    <div id={transaction.id} className="card_wrapper">
      <p>{transaction.date}</p>
      <p>{transaction.description}</p>
      <p>{transaction.category_title}</p>
      <p>Amount: <span>{currencyType}</span> {transaction.amount.value}</p>     
    </div>
  )
}