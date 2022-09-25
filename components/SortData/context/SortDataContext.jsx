import { createContext } from 'react';
/* Creating a context object with a default value of sortType: 'default' and setSortType:() => {}. */
export const DataSortContext = createContext({
    sortType: 'default',
    setSortType: () => { }
});
