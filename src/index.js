import React from 'react';
import ReactDOM from 'react-dom';
const rootEl = document.getElementById("root");


let render = () => {
    const AdminApp = require('./App').default;
    ReactDOM.render(
      <AdminApp />,
      rootEl
    );
};

if (module.hot) {
  module.hot.accept('./App', () => {
      const NextApp = require('./App').default;
      render(
        <NextApp />,
        rootEl
      );
  });
}

render() 