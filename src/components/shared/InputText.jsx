import React from 'react';

const InputText = ({ name, label, onChange, placeholder, value, error }) => {
  let wraperClass = 'form-group';
  if (error && error.length > 0) {
    wraperClass += ' ' + 'has-error';
  }
  return (
    <div className={wraperClass}>
      <label htmlFor={name}>{label}</label>
      <div className='field'>
        <input
          type='text'
          name={name}
          className='form-control'
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {error && <div className='alert alert-danger'>{error}</div>}
      </div>
    </div>
  );
};

export default InputText;
