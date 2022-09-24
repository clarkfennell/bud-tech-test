import React from 'react';
import './FinanceCard.module.scss';
export const FinanceCard = ({ transaction }) => {
    return (<div id={transaction.id} className="card_wrapper">
      <p>{transaction.date}</p>
      <p>{transaction.description}</p>
      <p>{transaction.category_title}</p>
      <p className={(Math.sign(transaction.amount.value) === -1) ? 'value_negative' : 'value_positive'}>Amount: {(transaction.amount.currency_iso === 'GBP') ? '£' : null} {transaction.amount.value}</p>     
    </div>);
};
