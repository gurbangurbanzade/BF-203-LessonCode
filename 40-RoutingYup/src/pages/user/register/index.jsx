import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import find from "../../../../node_modules/lodash-es/find";
import { UserAuth } from "../../../context/UserAuth";
import { useNavigate } from "react-router-dom";

const digitsOnly = (value) => /^\d+$/.test(value);

const stringOnly = (value) => /^[A-Za-z]*$/.test(value);
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(10, "Too Long!")
    .required("Required")
    .test("reqem daxil etmek olmaz", stringOnly),
  password: Yup.string().required("Required"),
  age: Yup.string()
    .test("yaslniz reqem daxil edin", digitsOnly)
    .required("Required"),
  //   email: Yup.string().email('Invalid email').required('Required'),
});
function Register() {
  const navigate = useNavigate();
  const [a, b, IsLoginUser, setIsLoginUser] = useContext(UserAuth);
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          name: "",
          password: "",
          age: "",
          iAgree: false,
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          values.admin = false;
          values.basket = [];
          values.wishList = [];

          if (values.iAgree) {
            console.log(values);
            axios.post(
              "https://6548ba0edd8ebcd4ab23782e.mockapi.io/users/",
              values
            );
            navigate("/login");
          } else {
            alert("sertleri qebul edin");
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field name="name" />
            {/* {errors.name && touched.name ? (
              <di>{errors.firstName}</di\
              v>
            ) : null} */}
            <ErrorMessage name="name" />
            <br />
            <label htmlFor="password">Password</label>

            <Field name="password" />
            {/* {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null} */}
            <ErrorMessage name="password" />
            <br />
            <label htmlFor="age">age</label>
            <Field name="age" />
            <ErrorMessage name="age" />
            <br />
            <label htmlFor="iAgree">Butun sertleri qebul edirem</label>
            <Field type="checkbox" name="iAgree" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
