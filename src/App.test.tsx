import React from 'react';
import { render } from '@testing-library/react';
import './__mocks__/matchMedia.mock';
import App from './App';

test('should render App component', () => {
  const { container } = render(<App />);

  expect(container).toBeInTheDocument();
});
