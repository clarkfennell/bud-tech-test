import React from 'react';
import styles from './ProviderCard.module.scss';

/**
 * Props is an object with a property called providerInfo which is an object with properties title,
 * account_number, sort_code and description.
 * @property providerInfo - {
 */
type Props = {
  providerInfo: {
    title: string,
    account_number: string,
    sort_code: string,
    description: string
  },
}

export const ProviderCard = ({ providerInfo }: Props) => {
  return (
    <div className={styles.container}>
      <h4>Provider: {providerInfo.title}</h4>
      <h5>Account Type: {providerInfo.description}</h5>
      <div className={styles.account}>
        <p>Sort Code: {providerInfo.sort_code}</p>
        <p>Account No: {providerInfo.account_number}</p>
      </div>
    </div>
  )
}