import React from 'react'

const ItemCheckbox = ({ itemID, itemText, onChange, checked }) => (
    <label htmlFor={itemID}>
        <input type="checkbox" id={itemID} name="selected_items" key={itemText} defaultChecked={checked} value={itemText} onChange={onChange} /> {itemText}
    </label>
)

export default ItemCheckbox