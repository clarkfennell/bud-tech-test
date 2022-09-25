import React from 'react';
import styles from './BalanceCard.module.scss';
export const BalanceCard = ({ balance }) => {
    return (<div className={styles.container}>
      <h3 className={(balance.amount < 0) ? styles.negative : styles.positive}>Current Balance: {(balance.currency_iso === 'GBP') ? '£' : null}{balance.amount}</h3>
    </div>);
};
