import { useField, Field } from 'formik';
import React from 'react';

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  className: string;
}

const TextInput: React.FC<InputProps> = ({ name, type, ...restProps }) => {
  const [field, meta] = useField({ name, type });
  return (
    <>
      <Field
        error={meta.touched && !!meta.error}
        {...field}
        {...restProps}
        type={type}
        name={name}
      />
      {meta.touched && meta.error ? (
        <p className="text-red-500 -mt-10 w-3/4">
          <b>{meta.error}</b>
        </p>
      ) : null}
    </>
  );
};

export default TextInput;
