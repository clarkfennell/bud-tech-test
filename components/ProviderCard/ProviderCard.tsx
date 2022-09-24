import React from 'react';

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
    <div className="container_provider">
      <h4>Provider: {providerInfo.title}</h4>
      <h5>Account Type: {providerInfo.description}</h5>
      <div className="account_info">
        <p>Sort Code: {providerInfo.sort_code}</p>
        <p>Account No: {providerInfo.account_number}</p>
      </div>
    </div>
  )
}