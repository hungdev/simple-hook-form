import React, { useState } from 'react';

export default function Controller() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});


  const onValidate = (name, val, rules) => {
    // if (rules?.required) {
    //   console.log('aaa');
    //   if (!val) {
    //     setErrors(prev => ({ ...prev, [name]: `Field ${name} is required` }));
    //   }
    //   return;
    // }
    // if (rules?.validate) {
    //   console.log('validate');
    //   const error = rules.validate(val);
    //   console.log('error', error);
    //   if (error) {
    //     setErrors(prev => ({ ...prev, [name]: error }));
    //   } else {
    //     setErrors(prev => {
    //       const newErrors = { ...prev };
    //       delete newErrors[name];
    //       return newErrors;
    //     });
    //   }
    // }

  };

  const onChange = (name, rules) => (value) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
    onValidate(name, value, rules);
  };

  const setValue = (name, value, conditions) => {
    // TODO: conditions
    // { shouldValidate: true },...
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const watch = (name) => values?.[name];

  const getValues = (name) => name ? values?.[name] : values;

  const handleSubmit = (cb) => () => cb(values);

  const setError = (name, error) => setErrors(prev => ({ ...prev, [name]: error }));


  return ({ values, onChange, errors, setValue, setErrors, setError, handleSubmit, watch, getValues });
};