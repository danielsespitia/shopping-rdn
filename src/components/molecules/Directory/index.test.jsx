import React from 'react';
import { render, screen } from '@testing-library/react';
import { Directory } from '.';

const sections = [
  {
    id: 1,
    title: 'Hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
  },
  {
    id: 2,
    title: 'Jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
  },
];

test('renders correctly', () => {
  render(<Directory />);
});

describe('renders elements correctly', () => {
  beforeEach(() => {
    render(<Directory sections={sections} />);
  });

  test('renders two sections correctly', () => {
    const sections = screen.getAllByTestId('menu-item');
    expect(sections.length).toBe(2);
  });
});
