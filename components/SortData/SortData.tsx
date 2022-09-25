import React, { useContext } from 'react';
import { DataSortContext } from './context/SortDataContext';
import styles from './SortData.module.scss';

export const SortData = () => {
/* Destructuring the setSortType function from the DataSortContext. */
  const { setSortType } = useContext(DataSortContext);

  return (
    <div className={styles.container}>
      <p>Sort transactions by:</p>
      <div className={styles.wrapper}>
        <button
          type='button'
          accessKey='s' 
          className={styles.btn}
          onClick={() => setSortType('ASC')}
          aria-label="Click here to sort transactions in ascending order"
        ><span>Ascending</span></button>
        <button
          type='button'
          accessKey='w'
          className={styles.btn}
          onClick={() => setSortType('DESC')}
          aria-label="Click here to sort transactions in descending order"
        ><span>Descending</span></button>
        <button
          type='button'
          accessKey='r'
          className={styles.btn}
          onClick={() => setSortType('default')}
          aria-label="Click here to show all transactions sorted by date"
        ><span>All Transactions</span></button>
      </div>
    </div>
  )
}