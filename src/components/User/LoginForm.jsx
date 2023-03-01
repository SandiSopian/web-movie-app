import { Formik, Field, Form, ErrorMessage } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import Layout from "../Layout/Layout";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => (
  <Layout>
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        // Handle form submission logic here
      }}
    >
      {({ errors, touched }) => (
        <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="font-bold mb-4">Login</h1>
          <Form className="flex flex-col gap-2">
            <div className=" flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" id="name" className="border" placeholder="Enter name" />
              <ErrorMessage name="name" component="div" className="text-xs text-red-600" />
            </div>
            <div className=" flex flex-col gap-2">
              <label htmlFor="username">Username</label>
              <Field type="text" name="username" id="username" className="border" placeholder="Enter username" />
              <ErrorMessage name="username" component="div" className="text-xs text-red-600" />
            </div>

            <div className=" flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" id="password" className="border" placeholder="Enter password" />
              <ErrorMessage name="password" component="div" className="text-xs text-red-600" />
            </div>

            <div className=" flex flex-col gap-2">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field type="password" name="confirmPassword" id="confirmPassword" className="border" placeholder="Confirm password" />
              <ErrorMessage name="confirmPassword" component="div" className="text-xs text-red-600" />
            </div>

            <button type="submit" className="border rounded-md mt-2 p-2 bg-blue-600">
              Register
            </button>
          </Form>

          <h2 className="text-sm mt-2">
            No have account?
            <span className="underline hover:font-semibold">
              <Link href="/register">Register!</Link>
            </span>
          </h2>
        </div>
      )}
    </Formik>
  </Layout>
);

export default LoginForm;
