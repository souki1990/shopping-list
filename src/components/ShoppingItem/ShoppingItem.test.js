import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ShoppingItem from './ShoppingItem';

test('Shopping Item should respond to call back props', () => {

    const item = { id: '1', designation: 'kiwi' }
    const onCheck = jest.fn()
    const deleteItem = jest.fn()
    const { getByLabelText, getByRole } = render(
        <ShoppingItem
            item={item}
            key={item.id}
            onCheck={onCheck}
            deleteItem={deleteItem}
        />
    )
    fireEvent.click(getByLabelText(item.designation));
    expect(getByLabelText(item.designation).checked).toBe(true);
    expect(onCheck).toBeCalledWith(item);
    expect(onCheck).toHaveBeenCalledTimes(1);
    fireEvent.click(getByRole('button'));
    expect(deleteItem).toBeCalledWith(item);
    expect(deleteItem).toHaveBeenCalledTimes(1);
})
