import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
  // ReactDOM.render(<h1>hello world</h1>, rootEl);
});