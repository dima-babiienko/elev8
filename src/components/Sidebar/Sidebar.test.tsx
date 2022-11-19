import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';

import Sidebar from './index';

test('renders Navbar component', () => {
  const { container } = render(<Sidebar />);
  expect(container).toBeInTheDocument();
});

test('renders logo text', () => {
  render(<Sidebar />);
  const logoText = screen.getByText('ELEV');
  expect(logoText).toBeInTheDocument();
});

test('animates sidebar menu', () => {
  render(<Sidebar />);
  const collapseIcon = screen.getByTestId('collapse');
  const sidebar = screen.getByTestId('sidebar');
  expect(sidebar).toHaveClass('w-64');
  fireEvent.click(collapseIcon);

  expect(sidebar).not.toHaveClass('w-64');
  expect(sidebar).toHaveClass('w-68px');
});
