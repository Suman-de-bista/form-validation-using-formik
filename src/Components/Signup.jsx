import React from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";

const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 Character or less")
      .required("First Name is Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 Character or less")
      .required("Last Name is Required"),
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 character")
      .required("Password is Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password doesnot Match")
      .required("Confirm Password is Required"),
    education: Yup.string().required("Education is Required"),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        nepali: false,
        education: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
        alert(
          "Your Form is Submitted Successfully. Go to Console to see the values."
        );
        console.log(values);
        resetForm();
      }}
    >
      {(formik) => (
        <div className="mt-3 p-10 shadow-md shadow-slate-700 rounded-2xl w-2/5">
          <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
          <Form className="space-y-8">
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="Last Name" name="lastName" type="text" />

            <div className="dropdown">
              <label htmlFor="education" className="text-sm">
                Education
              </label>
              <Field
                component="select"
                name="education"
                placeholder="select option"
                label="education"
              >
                <option value=""></option>
                <option value="slc">SLC</option>
                <option value="ug">UG</option>
                <option value="pg">PG</option>
              </Field>
              <ErrorMessage
                component="div"
                className="error "
                name="education"
              />
            </div>

            <TextField label="Nepali" name="nepali" type="checkbox" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <div className="btns flex justify-center">
              <button
                className="px-4 py-2 mr-4 mt-2 bg-blue-600 text-white rounded-lg hover:bg-blue-900"
                type="submit"
              >
                Register
              </button>
              <button
                className="px-4 py-2 mr-4 mt-2  bg-red-600 text-white rounded-lg hover:bg-red-900"
                type="reset"
              >
                Reset
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Signup;
