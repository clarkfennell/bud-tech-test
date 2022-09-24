import { createContext } from 'react';

export type DataSortType = 'default' | 'RESET' | 'ASC' | 'DESC';

export type SortType = {
  sortType: DataSortType;
  setSortType:(type: DataSortType) => void;
}

export const DataSortContext = createContext<SortType>({
  sortType: 'default',
  setSortType:() => {}
})