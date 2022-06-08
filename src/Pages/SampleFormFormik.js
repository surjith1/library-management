import React from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup';

const SampleFormFormik = () => {
    const formValidationSchema = yup.object({
        email: yup
          .string()
          .required("Why not fill this email? 😉")
          .min(5, "Need a bigger email 😄")
          .matches(
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            "Pattern not matched 🤔"
          ),
        password: yup
          .string()
          .required("Why not fill this password? 😉")
          .min(8, "Need a bigger password 😄")
          .max(12, "Too much password 😅")
      });
const {
    handleSubmit,
    values,
    handleChange,
    handleBlur,
    errors,
    touched
  } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("Form values", values);
    }
  });
  return (
    <div>
    <form onSubmit={handleSubmit} className="user-form">
    <input
      name="email"
      type="email"
      placeholder="Enter email"
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {/* error & touched */}
    {errors.email && touched.email ? errors.email : ""}
    <input
      name="password"
      type="password"
      placeholder="Enter password"
      value={values.password}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {errors.password && touched.password ? errors.password : ""}
    <button type="submit">Submit</button>
    Values
    <pre>{JSON.stringify(values)}</pre>
    Error
    <pre>{JSON.stringify(errors)}</pre>
    Touched
    <pre>{JSON.stringify(touched)}</pre>
  </form>
    </div>
  )
}

export default SampleFormFormik
