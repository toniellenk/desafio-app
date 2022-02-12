import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text "hat is the longest word ?"', () => {
  render(<App />);
  const linkElement = screen.getByText(/What is the longest word \?/i);
  expect(linkElement).toBeInTheDocument();
});
