import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  const regex = /^[A-Za-z\s]*$/;

  // const str1 = 'contains_underscore';

  // // null
  // console.log(str1?.match(regex));

  if (!values.name) {
    errors.name = "Bos saxlaya bilmezsen";
  } else if (values.name.length > 8) {
    errors.name = "Ad cox uzundur";
  } else if (!values.name?.match(regex)) {
    errors.name = "Adda reqem var";
  }
  if (!values.age) {
    errors.age = "Bos saxlaya bilmezsen";
  } else if (values.age < 18) {
    errors.age = "Usaqlara giris gadagandir";
  } else if (values.age > 25) {
    errors.age = "artiq qocalmisiniz";
  }

  // if (!values.lastName) {
  //   errors.lastName = "Required";
  // } else if (values.lastName.length > 20) {
  //   errors.lastName = "Must be 20 characters or less";
  // }

  // if (!values.email) {
  //   errors.email = "Required";
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = "Invalid email address";
  // }

  return errors;
};

function AddProduct() {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      age: 0,
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <br />
      {formik.errors.name ? (
        <div style={{ color: "red" }}> {formik.errors.name}</div>
      ) : null}
      <br />
      <label htmlFor="surname">Surname</label>
      <input
        id="surname"
        name="surname"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.surname}
      />
      <br />
      <label htmlFor="age">Age</label>
      <input
        id="age"
        name="age"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.age}
      />
      {formik.errors.age ? (
        <div style={{ color: "red" }}> {formik.errors.age}</div>
      ) : null}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddProduct;
