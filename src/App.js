import React, { useState } from 'react';
import useForm from './Form';
import Field from './Field';
import Input from './Input';

function App() {
  const control = useForm();
  const { errors, handleSubmit, setValue, values } = control;
  console.log('control', control?.values);

  const onSubmit = (values) => {
    console.log('submit', values);
  };

  const onChangeIp2 = (ev) => setValue('password', ev.target.value);


  return (
    <div className="App">
      <Field
        name='userName'
        control={control}
        rules={{
          required: true,
          validate: (value) => value?.length > 3 ? 'Length is over 3 letter' : null
        }}
      >
        {({ onChange, value = '', name }) => <Input onChange={onChange} value={value} errors={errors} name={name} title='User name' />}
      </Field>

      <div>
        <div>Password</div>
        <input onChange={onChangeIp2} value={values?.password || ''} />
      </div>
      <div onClick={handleSubmit(onSubmit)}>onSubmit</div>
    </div>
  );
}

export default App;
