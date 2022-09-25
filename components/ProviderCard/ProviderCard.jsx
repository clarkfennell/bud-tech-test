import React from 'react';
import styles from './ProviderCard.module.scss';
export const ProviderCard = ({ providerInfo }) => {
    return (<div className={styles.container}>
      <h4>Provider: {providerInfo.title}</h4>
      <h5>Account Type: {providerInfo.description}</h5>
      <div className={styles.account}>
        <p>Sort Code: {providerInfo.sort_code}</p>
        <p>Account No: {providerInfo.account_number}</p>
      </div>
    </div>);
};
