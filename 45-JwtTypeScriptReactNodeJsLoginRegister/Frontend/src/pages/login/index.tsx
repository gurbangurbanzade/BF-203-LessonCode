import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import axios from "axios";
import { UserStateTy, login } from "./../../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface MyFormValues {
  email: string;
  userName: string;
}

const Login = () => {
  const initialValues: MyFormValues = { email: "", userName: "" };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log(values);

          axios.post("http://localhost:5000/login/", values).then((res) => {
            console.log(res.data);
            localStorage.setItem("token", res.data);

            dispatch(login(true));
            navigate("/");
          });
        }}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="email" />
          <br />
          <label htmlFor="userName">userName </label>
          <Field id="userName" name="userName" placeholder="userName" />
          <br />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
