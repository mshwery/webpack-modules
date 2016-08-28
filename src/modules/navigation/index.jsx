import React from 'react';
import ReactDOM from 'react-dom';

const Navigation = () => (
  <div>
    Navigation
  </div>
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
