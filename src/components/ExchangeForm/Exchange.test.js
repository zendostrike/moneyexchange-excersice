import React from 'react';
import ReactDOM from 'react-dom';
import ExchangeForm from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExchangeForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
