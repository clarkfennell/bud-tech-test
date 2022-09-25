import React from 'react';
import styles from './Layout.module.scss';

export const Layout = ({ children }: any) => {
  return (
    <div className={styles.container}>
      { children }
    </div>
  )
}