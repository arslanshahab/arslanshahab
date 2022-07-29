import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.scss';
import reportWebVitals from './reportWebVitals';
import Layout from './layout/Layout';
import SiteNavigator from './navigation/SiteNavigator';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <SiteNavigator />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
