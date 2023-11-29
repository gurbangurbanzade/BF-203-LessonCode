import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import find from "../../../../node_modules/lodash-es/find";
import { UserAuth } from "../../../context/UserAuth";
import { useNavigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Too Short!")
    .max(9, "Too Long!")
    .required("Required"),
  password: Yup.string().required("Required"),
  //   email: Yup.string().email('Invalid email').required('Required'),
});
function Login() {
  const navigate = useNavigate();
  const [a, b, IsLoginUser, setIsLoginUser] = useContext(UserAuth);
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          name: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
          axios("https://6548ba0edd8ebcd4ab23782e.mockapi.io/users").then(
            (res) => {
              console.log(res.data);
              const data = res.data;
              let check = data.find(
                (elem) =>
                  elem.password == values.password && elem.name == values.name
              );
              if (check) {
                setIsLoginUser(check);
                console.log(IsLoginUser);
                navigate("/");
              } else {
                alert("istifadeci tapilmadi");
              }
            }
          );
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
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
