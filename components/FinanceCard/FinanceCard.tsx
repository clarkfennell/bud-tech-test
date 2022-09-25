import React, { useState, useRef, useEffect, useMemo } from 'react';
import styles from './FinanceCard.module.scss';

/**
 * Props is an object with a property called transaction which is an object with a property called
 * amount which is an object with a property called value which is a number and a property called
 * currency_iso which is a string and a property called category_title which is a string and a property
 * called date which is a string and a property called description which is a string and a property
 * called id which is a string.
 * @property transaction - {
 */
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
  }
}

const useOnScreen = (ref: any) => {

/* Setting the state of isIntersecting to false. */
  const [isIntersecting, setIntersecting] = useState(false)

/* Creating a new IntersectionObserver object and passing it a callback function. */
  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  )

/* A hook that is called after every render. It is used to perform side effects. */
  useEffect(() => {
    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => { observer.disconnect() }
  }, [])

/* Returning the value of isIntersecting. */
  return isIntersecting
}

export const FinanceCard = ({ transaction }: Props) => {
/* Creating a ref and then passing it to the useOnScreen hook. */
  const ref = useRef<any>()
  const isVisible = useOnScreen(ref)

/* Creating a new Date object and then calling the toDateString method on it. */
  const dateHandler = new Date(transaction.date).toDateString();

  
/* Creating a new Intl.NumberFormat object and passing it two arguments. The first argument is a string
and the second argument is an object. The string is the locale and the object has two properties.
The first property is a string and the second property is a string. The first property is the style
and the second property is the currency. */
// If other currencies where involved, checks would be made before the formatting of the value
  const valueFormatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  })

/* Formatting the value of the transaction. */
  const valueHandler = valueFormatter.format(transaction.amount.value);

  return (
    // Future plan: possibly make these clickable to bring up a more detailed version of transaction
    <div id={transaction.id} ref={ref} className={isVisible ? styles.visible : styles.invisible}>
      <div className={(transaction.amount.value < 0) ? styles.negative : styles.positive}>
        <p>{dateHandler}</p>
        <p>{transaction.description}</p>
        <p>{transaction.category_title}</p>
        <p >Amount: {valueHandler}</p>
      </div>
    </div>
  )
}