import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ShoppingList from './shoppingList';

beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
        value: {
            getItem: jest.fn(() => null),
            setItem: jest.fn(() => null)
        },
        writable: true
    })
})

test('renders learn react link', () => {
    const { getByPlaceholderText, getByRole, getByLabelText } = render(
        <ShoppingList />
    )
    const input = getByPlaceholderText('add an item ...');
    fireEvent.change(input, { target: { value: 'kiwi' } });
    expect(input.value).toBe('kiwi');
    fireEvent.click(getByRole('button'));
    expect(input.value).toBe('');
    expect(getByLabelText('kiwi')).not.toBe(null);
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(3);

})
