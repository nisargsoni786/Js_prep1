import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const a=false;
const b=true;

ReactDOM.render(



  <React.StrictMode>
    {a && <h1>jsn</h1> }
    {b && <App/>}
  </React.StrictMode>,
  document.getElementById('root')
);

