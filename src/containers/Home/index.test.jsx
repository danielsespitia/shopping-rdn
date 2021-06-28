import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from '.';

test('renders correctly', () => {
  render(<Home />);
});

describe('renders elements correctly', () => {
  beforeEach(() => {
    render(<Home />);
  });

  test('renders directory', () => {
    const directory = screen.getByTestId('directory');
    expect(directory).toBeInTheDocument();
  });

  test('renders three elements', () => {
    const menuItems = screen.getAllByTestId('menu-item');
    expect(menuItems.length).toBe(5);
  });

  test('renders element title in uppercase', () => {
    const elementTitle = screen.getByText('HATS');
    expect(elementTitle).toBeInTheDocument();
  });
});
