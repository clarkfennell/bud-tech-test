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
  return (
    <div id={transaction.id} className="card_wrapper">
      <p>{transaction.date}</p>
      <p>{transaction.description}</p>
      <p>{transaction.category_title}</p>
      <p>Amount: {(transaction.amount.currency_iso === 'GBP') ? '£' : null} {transaction.amount.value}</p>     
    </div>
  )
}