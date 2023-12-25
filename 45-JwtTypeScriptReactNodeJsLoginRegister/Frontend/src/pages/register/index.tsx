import * as React from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface MyFormValues {
  email: string;
  userName: string;
}

const Register = () => {
  const navigate = useNavigate();

  const initialValues: MyFormValues = { email: "", userName: "" };
  return (
    <div>
      <h1>Register</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log(values);
          axios.post("http://localhost:5000/users/", values).then((res) => {
            console.log(res);

            if (res.status == 201) {
              alert("bu email art;q qeydiyyatdan kecib");
            }
            if (res.status == 200) {
              alert("qeydiyyat ugurla tamamlandi");
              navigate("/");
            }
          });
        }}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="email " />
          <br />
          <label htmlFor="userName">Username</label>
          <Field id="userName" name="userName" placeholder="userName " />
          <br />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
