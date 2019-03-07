import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import App from './App';
import Card from './Card'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div >
    <Card name = "Hello world!" source= "https://i.imgur.com/665nscC.jpg" />
  </div>
  , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
