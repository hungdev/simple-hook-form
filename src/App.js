import React, { useState } from 'react';
import useForm from './Form';
import Field from './Field';
import Input from './Input';
import Joi from 'joi';
import { joiResolver } from './utils';

const schema = Joi.object({
  userName: Joi.string()
    .min(5)
    .max(10)
    .required()
    .messages({
      "string.base": `"username" should be a type of 'text' joiiiii`,
      "string.empty": `"username" cannot be an empty field joiiiii`,
      "string.min": `"username" should have a minimum length of {#limit} joiiiii`,
      "string.max": `"username" should have a maximum length of {#limit} joiiiii`,
      "any.required": `"username" is a required field joiiiii`
    }),
  displayName: Joi.string().min(5)
    .max(10)
    .required()
    .messages({
      "string.base": `"displayName" should be a type of 'text' joiiiii`,
      "string.empty": `"displayName" cannot be an empty field joiiiii`,
      "string.min": `"displayName" should have a minimum length of {#limit} joiiiii`,
      "string.max": `"displayName" should have a maximum length of {#limit} joiiiii`,
      "any.required": `"displayName" is a required field joiiiii`
    })
    .custom((value, helper) => {
      if (value.length < 8) {
        return helper.message("lastName must be at least 8 characters long");
      } else {
        return true;
      }

    }),
  book: Joi.array().min(1),
});
function App() {
  // const control = useForm({ validationSchema: joiResolver(schema) });
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
        {({ onChange, value = '', name, onBlur }) => (
          <Input
            control={control}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            errors={errors}
            name={name}
            title='User name' />
        )}
      </Field>

      <div>
        <div>Display Name</div>
        <input {...register('displayName', { required: true, })} />
        <div>{errors?.displayName}</div>
      </div>

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
