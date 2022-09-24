import { createContext } from 'react';
export const DataSortContext = createContext({
    sortType: 'default',
    setSortType: () => { }
});
