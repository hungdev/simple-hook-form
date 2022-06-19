import React, { useEffect } from 'react';

export default function Input({ control, onChange, value, errors, name, title }) {

  useEffect(() => {
    // control?.setValue('password', 'hello');
  }, []);

  const onChangeInput = (ev) => onChange?.(ev.target.value);

  return (
    <div>
      <div>{title}</div>
      <input type='text' onChange={onChangeInput} value={value} />
      <div>{errors?.[name]}</div>
    </div>
  );
}
