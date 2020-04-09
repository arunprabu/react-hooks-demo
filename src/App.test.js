import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// tests specs 
test('renders learn react link', () => {

  const { getByText } = render(<App />);
  const linkElement = getByText(/React App with Hooks/i);
  expect(linkElement).toBeInTheDocument();
});

test('app is available', () => {
  expect(App).toBeTruthy();
});