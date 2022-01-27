/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        *,
        ::before,
        ::after {
          box-sizing: border-box;
        }

        html {
          color: #4f5c65;
          font-size: 16px;
          line-height: 24px;
          margin: 0;
          padding: 0;
          font-family: Helvetica, sans-serif;
          height: 100%;
          width: 100vw;
          background-color: white;
        }

        a {
          text-decoration: none;
          color: #353e44;
          font-size: 15px;
          font-weight: 700;
        }
      `}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
