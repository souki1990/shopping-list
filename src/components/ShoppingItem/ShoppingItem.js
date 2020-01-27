import React from 'react';
import './ShoppingItem.css';

const ShoppingItem = props => {

    return (
        <li className="shopping-item">
            <label>
                {props.item.designation}
                <input
                    type="checkbox"
                    onChange={() => {
                        props.onCheck(props.item)
                    }}
                    checked={props.item.checked}
                />
                <span className="checkmark"></span>
            </label>
            <button
                className="remove-button"
                onClick={() =>
                    props.deleteItem(props.item)
                }
            >
                <span className="delete-icon"> </span>
            </button>
        </li>
    )
}

export default ShoppingItem
