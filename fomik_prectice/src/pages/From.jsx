import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';

function From() {

    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          password: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
              email: Yup.string().email('Invalid email address').required('Required'),
              password : Yup.string().required('Required')
              .matches(
                /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
          'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number or special character.')
          }),
          

        onSubmit: values => {
          console.log(values);
        },
      });

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
        <h3><input type='text' name='name' placeholder='enter name' onChange={formik.handleChange} /></h3><span>{formik.errors.name}</span>
        <h3><input type='text' name='email' placeholder='enter email'onChange={formik.handleChange} /></h3><span>{formik.errors.email}</span>
        <h3><input type='text' name='password' placeholder='enter password'onChange={formik.handleChange} /></h3><span>{formik.errors.password}</span>
        <button type='submit'>Submit</button>
        </form>
        
    </div>
  )
}

export default From