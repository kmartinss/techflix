import React from 'react';

function FormField({ value, onChange, type, label, name }) {
  return (
    <div>
      <label>
        {label}:
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
      />


    </div>
  )
}

export default FormField;