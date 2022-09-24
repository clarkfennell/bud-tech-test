import React from 'react';
export const BalanceCard = ({ balance }) => {
    return (<div className="container_balance">
      <h3>Current Balance: {(balance.currency_iso === 'GBP') ? '£' : null}{balance.amount}</h3>
    </div>);
};
