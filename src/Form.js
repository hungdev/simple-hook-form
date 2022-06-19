import React, { useState } from 'react';
import { removeEmpty } from './utils';
import { validateField } from './Validate';

export default function Controller() {
  const [values, setValues] = useState({});
  const [rules, setRules] = useState({});
  const [errors, setErrors] = useState({});


  const register = (name, fieldRules) => {
    !values?.hasOwnProperty(name) && setValues(prev => ({ ...prev, [name]: undefined }));
    !rules?.hasOwnProperty(name) && setRules(prev => ({ ...prev, [name]: fieldRules }));

    return ({
      value: values?.[name] || '',
      onChange: (event) => onChangeField(name, fieldRules, event?.target?.value)
    });
  };


  const onValidate = (name, val, fieldRules) => {
    const error = validateField(name, val, fieldRules);
    setErrors(prev => removeEmpty({ ...prev, [name]: error }));
  };

  const onChange = (name, fieldRules) => (value) => onChangeField(name, fieldRules, value);

  const onChangeField = (name, fieldRules, value) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
    onValidate(name, value, fieldRules);
  };

  const setValue = (name, value, conditions = { shouldValidate: true }) => {
    // TODO: conditions
    // { shouldValidate: true },...
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
    conditions?.shouldValidate && onValidate(name, value, rules?.[name]);
  };

  const getValues = (name) => name ? values?.[name] : values;

  const handleSubmit = (cb) => () => {
    Object.keys(values).forEach(name => {
      onValidate(name, values[name], rules[name]);
    });

    if (Object.values(errors).every(v => !v)) {
      cb(values);
    }
  };

  const setError = (name, error) => setErrors(prev => ({ ...prev, [name]: error }));

  const getError = (name) => errors?.[name];

  const clearError = (name) => setErrors(prev => {
    const newErrors = { ...prev };
    delete newErrors[name];
    return newErrors;
  });


  return ({
    register,
    values, setValue, getValues,
    errors, setErrors, setError, getError, clearError,
    onChange, handleSubmit,
  });
};