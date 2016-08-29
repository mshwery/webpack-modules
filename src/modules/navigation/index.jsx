import React from 'react';
import ReactDOM from 'react-dom';

const Navigation = () => (
  <header>
    Navigation
  </header>
);

function mount(elementID = 'mount') {
  ReactDOM.render(
    <Navigation />,
    document.getElementById(elementID)
  );
}

export default {
  mount,
};
