import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the full-stack portfolio', () => {
  render(<App />);
  const portfolioHeading = screen.getByText(/full-stack web developer portfolio/i);
  expect(portfolioHeading).toBeInTheDocument();
});
