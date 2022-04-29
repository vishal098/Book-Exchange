import React from "react";
import { FastField, Field, Form, Formik, getIn } from "formik";
import Button from "../lib/Button";
import { Link } from "react-router-dom";
import { Input } from "antd";

const ErrorMessage = ({ name }) => {
  return (
    <div style={{ color: "red" }}>
      <FastField name={name}>
        {({ form }) => {
          const error = getIn(form.errors, name);
          return error ? error : null;
        }}
      </FastField>
    </div>
  );
};

const SignUp = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors["password"] = "Required";
    }
    if (!values.cPassword) {
      errors["cPassword"] = "Required";
    }
    if (values.cPassword !== values.password) {
      errors["cPassword"] = "Password does not match";
    }
    return errors;
  };

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, setFieldValue }) => (
        <Form onSubmit={handleSubmit} style={{width:'100%'}}>
          <label style={{ marginBottom: "10px" }}>Email*</label>
          <Field name="email">
            {({ field }) => (
              <Input
                {...field}
                type="email"
                onChange={(e) => setFieldValue("email", e.target.value)}
              />
            )}
          </Field>
          <ErrorMessage name="email" />
          <label style={{ margin: "10px 0px" }}>Password*</label>

          <Field name="password">
            {({ field }) => (
              <Input
                {...field}
                type="password"
                onChange={(e) => setFieldValue("password", e.target.value)}
              />
            )}
          </Field>
          <ErrorMessage name="password" />
          <label style={{ margin: "10px 0px" }}>Confirm Password*</label>

          <Field name="cPassword">
            {({ field }) => (
              <Input
                {...field}
                type="password"
                onChange={(e) => setFieldValue("cPassword", e.target.value)}
              />
            )}
          </Field>
          <ErrorMessage name="cPassword" />
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              margin: "20px 0px",
            }}
          >
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
