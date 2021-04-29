import React from 'react';

const InputSelect = ({
  name,
  label,
  onChange,
  defaultOption,
  options,
  value,
  error,
}) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <div className='field'>
        <select
          name={name}
          className='form-control'
          value={value}
          onChange={onChange}
        >
          <option value=''>{defaultOption}</option>
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
        {error && (
          <div className='alert alert-danger' role='alert'>
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputSelect;
