import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    const { getByText } = render(<App />);
    const textElement = getByText(/Create your shopping list/i);
    expect(textElement).toBeInTheDocument();
})
