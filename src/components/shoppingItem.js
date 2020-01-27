import React, { useState } from 'react';

const ShoppingItem = props => {
    const [checked, setChecked] = useState(props.item.checked)

    return (
        <li className="shopping-item">
            <label>
                {props.item.designation}
                <input
                    type="checkbox"
                    onChange={e => {
                        setChecked(e.currentTarget.checked);
                        props.onCheck(props.item)
                    }}
                    checked={checked}
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
