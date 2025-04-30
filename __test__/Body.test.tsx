import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Body from '../src/components/Body';

describe('Body Component', () => {
  it('renders children correctly', () => {
    render(
      <Body>
        <h1>Test Content</h1>
      </Body>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies the default background color', () => {
    render(<Body />);
    const bodyElement = screen.getByRole('generic'); // `div` is a generic role
    expect(bodyElement).toHaveStyle({ backgroundColor: '#1e293b' });
  });

  it('applies a custom background color', () => {
    render(<Body bgColor="#ffffff" />);
    const bodyElement = screen.getByRole('generic');
    expect(bodyElement).toHaveStyle({ backgroundColor: '#ffffff' });
  });
});