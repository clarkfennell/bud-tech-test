import React from 'react';
import styles from './BalanceCard.module.scss';

/**
 * Props is an object with a balance property that is an object with an amount property that is a
 * number and a currency_iso property that is a string.
 * @property balance - {
 */
type Props = {
  balance: {
    amount: number, 
    currency_iso: string
  }
}

export const BalanceCard = ({ balance }: Props) => {
  return (
    <div className={styles.container}>
      <h3 className={(balance.amount < 0) ? styles.negative : styles.positive}>Current Balance: {(balance.currency_iso === 'GBP') ? '£' : null}{balance.amount}</h3>
    </div>
  )
}