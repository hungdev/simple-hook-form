# React Simple Validation
inspired by react hook form and props name and rewritten in a simple way.

Don't hesitate to give me a star.

## Why don't use react-hook-form
I had some problems in react-hook-form and I couldn't handle it, and I decided to write my own. The library is in basic and simple form and has basic features like hook-form side, you can also fork and edit as you like. 

## Usage:
```
import React, { useState } from 'react';
import useForm from './Form';
import Field from './Field';
import Input from './Input';

function App() {
  const control = useForm();
  const { errors, handleSubmit, setValue, values, register } = control;
  console.log('control', control?.values);

  const onSubmit = (values) => {
    console.log('submit', values);
  };

  // const onChangeIp2 = (ev) => setValue('password', ev.target.value, { shouldValidate: false });
  const onChangeIp2 = (ev) => setValue('password', ev.target.value);

  // we have 2 ways to use with component: use Field or register()

  return (
    <div className="App">
      <Field
        name='userName'
        control={control}
        rules={{
          required: true,
          min: 15,
          max: 20,
          validate: (value) => value?.length > 5 ? 'Length is over 5 letter' : null
        }}
      >
        {({ onChange, value = '', name }) => (
          <Input
            control={control}
            onChange={onChange}
            value={value}
            errors={errors}
            name={name}
            title='User name' />
        )}
      </Field>

      <div>
        <div>Password</div>
        <input {...register('password', { required: true, })} onChange={onChangeIp2} value={values?.password || ''} />
        <div>{errors?.password}</div>
      </div>
      <div onClick={handleSubmit(onSubmit)}>onSubmit</div>
    </div>
  );
}

export default App;
```


To do next tasks:
- [x] Validation
- [ ] Apply Joi schema
- [ ] Init default value in Field
- [ ] Init default state useForm
- [ ] Init default validation
- [ ] Reset
- [ ] Trigger => validate one or multiple or all fields, if dont pass params => all, pass string => one, ['field1,'field2'] => validate each element in array
- [ ] unregister field => remove fields in list validation fields


