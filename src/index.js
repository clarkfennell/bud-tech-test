import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from'./App';
import { Layout } from './../components/Layout/Layout';
import { DataSortManager } from './../components/SortData/context/SortDataContextManager';

import './../styles/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <DataSortManager>
        <App />
      </DataSortManager>
    </Layout>
  </React.StrictMode>
);