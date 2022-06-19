import React, { Fragment, useEffect } from 'react';

export default function Field({ control, name, rules, children }) {
  const { register } = control;
  useEffect(() => {
    register(name, rules);
  }, []);

  const value = control?.values?.[name];
  const onChange = control?.onChange(name, rules);
  const onBlur = control?.onBlur(name, rules);
  return (
    <Fragment>
      {children?.({ onChange, value, name, onBlur })}
    </Fragment>
  );
}
