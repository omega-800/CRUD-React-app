import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Song from './Song';
import Songs from './Songs';
import * as serviceWorker from './serviceWorker';
import datetime from 'react-datetime';

ReactDOM.render(
  <React.StrictMode>
    <Songs />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
