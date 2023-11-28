import React from "react";
import { useFormik } from "formik";
const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};
const ProjFirmik = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <br />
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
export default ProjFirmik;
