import React, { ReactNode, useState } from 'react';
import { DataSortContext, DataSortType } from './SortDataContext';

interface Props {
  children?: ReactNode
}

export const DataSortManager = ({ children }: Props) => {
  const [sortType, setSortType] = useState<DataSortType>('default');
  return (
    <DataSortContext.Provider value={{sortType, setSortType}}>
      { children }
    </DataSortContext.Provider>
  )
}