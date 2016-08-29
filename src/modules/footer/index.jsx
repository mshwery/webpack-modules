import React from 'react';
import ReactDOM from 'react-dom';

const Footer = () => (
  <footer>
    Footer
  </footer>
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
