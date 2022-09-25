import { createContext } from 'react';

export type DataSortType = 'default' | 'RESET' | 'ASC' | 'DESC';

/**
 * SortType is an object with a sortType property of type DataSortType and a setSortType property that
 * is a function that takes a DataSortType and returns void.
 * @property {DataSortType} sortType - DataSortType - this is the type of the sort that is currently
 * being used.
 * @property setSortType - This is a function that will be used to set the sort type.
 */
export type SortType = {
  sortType: DataSortType;
  setSortType:(type: DataSortType) => void;
}

/* Creating a context object with a default value of sortType: 'default' and setSortType:() => {}. */
export const DataSortContext = createContext<SortType>({
  sortType: 'default',
  setSortType:() => {}
})