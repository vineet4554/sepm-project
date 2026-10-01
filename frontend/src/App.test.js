import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login page correctly', () => {
  render(<App />);
  const heading = screen.getByText(/Login/i);
  expect(heading).toBeInTheDocument();
});
