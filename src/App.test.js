import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// tests specs 
xtest('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('app is available', () => {
  expect(App).toBeTruthy();
})