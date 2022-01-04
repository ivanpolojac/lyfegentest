import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const cardElement = screen.getByText(/Select Launch Date/i);
  expect(cardElement).toBeInTheDocument();
});
