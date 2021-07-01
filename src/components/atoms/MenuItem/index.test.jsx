import React from 'react';
import { render, screen } from '@testing-library/react';
import { MenuItem } from '.';

// TODO: Add router to test, test router onClick method

test('renders correctly', () => {
  render(<MenuItem />);
});

const item = {
  id: 3,
  title: 'Sneakers',
  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
  size: 'large',
};

describe('renders elements correctly', () => {
  beforeEach(() => {
    const { title, imageUrl, size } = item;
    render(<MenuItem title={title} imageUrl={imageUrl} size={size} />);
  });

  test('renders menu item container correctly', () => {
    const menuItemContainer = screen.getByTestId('menu-item');
    expect(menuItemContainer).toBeInTheDocument();
  });

  // TODO: Test if size changes depending on size prop;

  test('renders background image correctly', () => {
    const backgroundImage = screen.getByTestId('background-image');
    expect(backgroundImage).toBeInTheDocument();
  });

  test('renders content container correctly', () => {
    const contentContainer = screen.getByTestId('content');
    expect(contentContainer).toBeInTheDocument();
  });

  test('renders title correctly', () => {
    const title = screen.getByText('Sneakers');
    expect(title).toBeInTheDocument();
  });

  test('renders subtitle correctly', () => {
    const subtitle = screen.getByText('SHOP NOW');
    expect(subtitle).toBeInTheDocument();
  });
});
