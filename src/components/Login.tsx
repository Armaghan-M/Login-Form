import React from "react";
import { useFormik } from "formik";
import registerSchema from "../validations/register";

interface LoginFormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const form = useFormik<LoginFormValues>({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        setSubmitting(false);
      }, 3000);
    },

    validationSchema: registerSchema
  });

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={form.handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">
          Login
        </h2>
        <label htmlFor="email" className="block text-gray-700 font-semibold">
          Email
        </label>
        <input
          type="text"
          placeholder="Email ..."
          className={`mt-1 block w-full px-4 py-2 border rounded-md ${
            form.touched.email && form.errors.email
              ? "border-red-500"
              : "border-gray-300"
          }`}
          name="email"
          value={form.values.email}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        {form.touched.email && form.errors.email ? (
          <p className="text-red-500 text-sm mt-1">{form.errors.email}</p>
        ) : null}

        <label
          htmlFor="password"
          className="block text-gray-700 font-semibold mt-6"
        >
          Password
        </label>
        <input
          type="password"
          placeholder="Password ..."
          className={`mt-1 block w-full px-4 py-2 border rounded-md ${
            form.touched.password && form.errors.password
              ? "border-red-500"
              : "border-gray-300"
          }`}
          name="password"
          value={form.values.password}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        {form.touched.password && form.errors.password ? (
          <p className="text-red-500 text-sm mt-1">{form.errors.password}</p>
        ) : null}

        <button
          type="submit"
          className={
            form.isSubmitting
              ? "opacity-50 bg-slate-400  text-white p-4 w-full shadow-lg mt-12 rounded-md font-bold text-xl"
              : "bg-blue-600 text-white p-4 w-full shadow-lg mt-12 rounded-md font-bold text-xl"
          }
          disabled={form.isSubmitting}
        >
          {form.isSubmitting ? "Logging in..." : "Log in"}
        </button>
      </form>
    </div>
  );
};

export default Login;
