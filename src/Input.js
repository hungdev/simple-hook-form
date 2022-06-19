import React, { useEffect } from 'react';

export default function Input({ control, onChange, value, errors, name, title, onBlur }) {

  useEffect(() => {
    // control?.setValue('password', 'hello');
  }, []);

  const onChangeInput = (ev) => onChange?.(ev.target.value);
  const onHandleBlur = (ev) => onBlur?.(ev.target.value);

  return (
    <div>
      <div>{title}</div>
      <input type='text' onChange={onChangeInput} value={value} onBlur={onHandleBlur} />
      <div>{errors?.[name]}</div>
    </div>
  );
}
