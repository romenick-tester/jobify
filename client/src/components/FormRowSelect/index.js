import React from "react";

;
const listDefault = ["option-1", "option-2", "option-3"];

const FormRowSelect = ({ labelText, name, value, handleChange, list = listDefault }) => {
    return (
        <div className='form-row'>
            <label htmlFor={name} className='form-label'>
                {labelText || name}
            </label>

            <select
                name={name}
                value={value}
                onChange={handleChange}
                className='form-select'
            >
                {list.map((itemValue, index) => {
                    return (
                        <option key={index} value={itemValue}>
                            {itemValue}
                        </option>
                    )
                })}
            </select>
        </div>
    )
};

export default FormRowSelect;