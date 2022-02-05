import React from 'react';
import { Formik, Form, useField } from 'formik';

const MyTextInput = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <div className="input-position">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
    </div>
  );
};

const MyForm = ({ submitNewWord }) => {
  return (
    <Formik
      initialValues={{
        word: '',
        translate: '',
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        if (values.word === '' || values.translate === '') return;
        submitNewWord([values.word, values.translate]);
        setSubmitting(false);
        resetForm();
      }}>
      <Form>
        <div>
          <MyTextInput label="Add new word " name="word" type="text" />
        </div>
        <div>
          <MyTextInput label="Add translate " name="translate" type="text" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default MyForm;
