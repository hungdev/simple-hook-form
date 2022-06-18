import React from 'react';

export default function Input({ onChange, value, errors, name, title }) {

  const onChangeInput = (ev) => onChange?.(ev.target.value);

  return (
    <div>
      <div>{title}</div>
      <input type='text' onChange={onChangeInput} value={value} />
      <div>{errors?.[name]}</div>
    </div>
  );
}
