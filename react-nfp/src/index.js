import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
// );


export const init = (page) => {
  return ReactDOM.render(
    <App page={page}/>,
    document.getElementById('root')
  );
  
};

module.hot.accept();
