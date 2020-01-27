import React, { useState, useRef, useEffect } from 'react';
import uuid from 'uuid/v4';
import ShoppingItem from '../ShoppingItem/ShoppingItem'
import "./ShoppingList.css"

const ShoppingList = () => {
    const form = useRef(null)
    const [value, setValue] = useState('');
    const initiaList = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
    const [list, setList] = useState(initiaList);

    useEffect(() => {
        if (list.length) {
            localStorage.setItem('list', JSON.stringify(list));
        }
    }, [list])

    const handleSubmit = () => {
        if (/\S/.test(value)) {
            setList(list.concat([{ id: uuid(), designation: value }]));
        }
    }

    const handleCheck = element => {
        setList(
            list.map(item => {
                if (element.id === item.id) {
                    item.checked = !element.checked
                }
                return item
            })
        )
    }

    const deleteItem = element => {
        setList(
            list.filter(e => {
                return e.id != element.id
            })
        )
    }

    return (
        <div className="shopping-list-container" data-testid="shopping-list">
            <form
                ref={form}
                onSubmit={e => {
                    e.preventDefault()
                    handleSubmit(value)
                    setValue('')
                }}
            >
                <button type="submit" value="form">
                    <span className="add-icon"></span>
                </button>
                <input
                    type="text"
                    className="add-element"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder="add an item ..."
                />
            </form>
            <div className="shopping-list">
                <ul className="list">
                    {list && list.map(
                        item =>
                            !item.checked && (
                                <ShoppingItem
                                    item={item}
                                    key={item.id}
                                    deleteItem={deleteItem}
                                    onCheck={handleCheck}
                                />
                            )
                    )}
                </ul>
                <ul className="list-checked">
                    {list && list.map(
                        item =>
                            item.checked && (
                                <ShoppingItem
                                    item={item}
                                    key={item.id}
                                    onCheck={handleCheck}
                                    deleteItem={deleteItem}
                                />
                            )
                    )}
                </ul>
            </div>
        </div>
    )
}

export default ShoppingList
