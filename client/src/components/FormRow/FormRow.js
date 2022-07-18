import React from "react";


const FormRow = ({ type, name, value, handleChange, labelText, placeHolder }) => {
    return (
        <div className="form-row">
            <label htmlFor={name} className="form-label">
                {labelText || name}
            </label>

            <input
                type={type}
                value={value}
                name={name}
                placeholder={placeHolder || name}
                onChange={handleChange}
                className="form-input"
            />
        </div>
    )
}

export default FormRow;