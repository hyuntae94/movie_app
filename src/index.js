import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function main(){
  return (
    ReactDOM.render(
      <App />,
      document.querySelector('#root')
    )
  )
}
main();
// setInterval(main,1000);