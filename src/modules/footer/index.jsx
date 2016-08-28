import React from 'react';
import ReactDOM from 'react-dom';

const Footer = () => (
  <div>
    Footer
  </div>
);

function mount(elementID = 'mount') {
  ReactDOM.render(
    <Footer />,
    document.getElementById(elementID)
  );
}

export default {
  mount,
};
