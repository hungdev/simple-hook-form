import React from 'react';

export default function Field({ control, name, rules, children }) {
  const value = control?.values?.[name];
  const onChange = control?.onChange(name, rules);
  return (
    <>
      {children?.({ onChange, value, name })}
    </>
  );
}
