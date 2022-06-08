import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import {useFormik} from 'formik';
import * as yup from 'yup';
import { Parallax } from 'react-scroll-parallax';

const Login = () => {
    let navigate= useNavigate();

    const validate = yup.object({
      email: yup.string().required("Enter Email")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Pattern not matched 🤔"
      ),
      psw: yup.string().required("Password should be enter").min(4,"password atleast enter 4 characters").max(8,"password should not exceed 8 character"),
    });
   
   
    const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
      initialValues: {
        email:'',
        psw:'',
      }, validationSchema:validate,
      onSubmit: (values) => {
        console.log("Form values", values); 
        navigate("/admin-login");
      }
    })
    console.log(values);
  return (
    <>
    <Parallax translateY={[-80, 40]} speed={10} transition={["translateY","2s"]} className="login-sec">
    <Container maxWidth="lg">

  <Paper elevation={3}>
    <div className="admin-login">
    <h1>Admin Login</h1>
    <form onSubmit={handleSubmit}>
    <div className="form-group">
    <TextField id="email" label="Email" variant="standard" type="email" name="email" fullWidth 
    onBlur={handleBlur} onChange={handleChange}
    value={values.email} error={errors.email && touched.email}
    helperText={errors.email && touched.email ? errors.email : ""} />
    
    </div>
    <div className="form-group">
    <TextField id="psw" label="Password" variant="standard" type="password" name="psw" fullWidth
    onBlur={handleBlur} onChange={handleChange}
    value={values.psw} error={errors.psw && touched.psw}
    helperText={errors.psw && touched.psw ? errors.psw : ""} />
    {errors.psw ? <span>{errors.psw}</span>:null}
    </div>
    <div className="form-group btn">
    <Fab variant="extended" color="secondary" type="submit">
  <NavigationIcon sx={{ mr: 1 }} />
  Login
</Fab>
    </div>
    <div className='form-group'>
    <p className='forgot-psw'>Forgot Password ?</p>
    </div>
    </form>
    </div>
    </Paper>



    
    </Container> 
    </Parallax>
    </>
  )
}

export default Login
