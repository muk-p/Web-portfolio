import { render, screen } from '@testing-library/react';
import App from './App';

test('shows projects before the personal introduction', () => {
  render(<App />);
  const projectsHeading = screen.getByRole('heading', { name: /projects/i });
  const aboutHeading = screen.getByRole('heading', { name: /a little about me/i });

  expect(screen.getByRole('heading', { name: 'Pixel-Plays', exact: true })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /pixel-plays online store/i })).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /visit pixel-plays|visit website/i })).toHaveLength(2);
  expect(projectsHeading.compareDocumentPosition(aboutHeading) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
});
