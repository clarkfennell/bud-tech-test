import React from 'react';

type Props = {
  balance: {
    amount: number, 
    currency_iso: string
  }
}

export const BalanceCard = ({ balance }: Props) => {
  return (
    <div className="container_balance">
      <h3>Current Balance: {(balance.currency_iso === 'GBP') ? '£' : null}{balance.amount}</h3>
    </div>
  )
}