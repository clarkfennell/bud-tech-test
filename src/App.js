import React, { useEffect, useState } from 'react';
import classes from './../styles/App.module.scss';
import { FetchData } from'./../components/FetchData/FetchData';

export const App = () => {
  const [finances, setFinances] = useState({});

  useEffect(() => {
    FetchData()
      .then((res) => setFinances(res))
      .catch((err) => console.log(`Cannot fetch API! ` + err.message))
  }, [])

  console.log(finances)

  return (
    <div className={classes.container}>
      <h1>Hello World!</h1>
    </div>
  )
}