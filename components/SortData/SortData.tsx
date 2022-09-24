import React, { useContext } from 'react';
import { DataSortContext } from './context/SortDataContext';

export const SortData = () => {
  const { sortType, setSortType } = useContext(DataSortContext);

  return (
    <div className="container_sort">
      <p>Sort transactions by:</p>
      <button 
        className="btn"
        onClick={() => setSortType('ASC')}
        aria-label="Click here to sort transactions in ascending order"
      >Ascending</button>
      <button 
        className="btn"
        onClick={() => setSortType('DESC')}
        aria-label="Click here to sort transactions in descending order"
      >Descending</button>
      <button
        className="btn"
        onClick={() => setSortType('default')}
        aria-label="Click here to show all transactions sorted by date"
      >Show All Transactions</button>
    </div>
  )
}