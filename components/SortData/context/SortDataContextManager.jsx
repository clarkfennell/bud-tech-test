import React, { useState } from 'react';
import { DataSortContext } from './SortDataContext';
export const DataSortManager = ({ children }) => {
    const [sortType, setSortType] = useState('default');
    return (<DataSortContext.Provider value={{ sortType, setSortType }}>
      {children}
    </DataSortContext.Provider>);
};
