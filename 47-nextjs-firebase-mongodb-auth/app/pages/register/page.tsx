// components/RegisterForm.tsx
"use client";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

const Register: React.FC = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="max-w-md mx-auto mt-8 p-8 bg-white rounded shadow-md">
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username
          </label>
          <Field
            type="text"
            id="username"
            name="username"
            className="w-full p-2 border rounded"
          />
          <ErrorMessage
            name="username"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <Field
            type="password"
            id="password"
            name="password"
            className="w-full p-2 border rounded"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default Register;
