import React, { Fragment, useEffect } from 'react';

export default function Field({ control, name, rules, children }) {
  const { register, registerRules } = control;
  useEffect(() => {
    register(name, rules);
  }, []);

  const value = control?.values?.[name];
  const onChange = control?.onChange(name, rules);
  return (
    <Fragment>
      {children?.({ onChange, value, name })}
    </Fragment>
  );
}
