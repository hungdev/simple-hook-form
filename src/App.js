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
