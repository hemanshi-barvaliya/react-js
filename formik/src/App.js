// import logo from './logo.svg';
import './App.css';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

function App() {

  const [Message, setMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      name:'',
      email:'',
      password:'',
    },
  
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),

      email: Yup.string().required('Required')
      .matches(
         /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          'Invalid email address'
      ),
      
      password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required')
        .matches(
          /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
          'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number or special character.'),
      
    }),

    onSubmit: value => {
      
      console.log(value);
      alert(JSON.stringify(value));
      setMessage(JSON.stringify(value));
  }
});

  

  

  return (

    <div className="App">
       
      <form onSubmit={formik.handleSubmit}>
      <h3><input type="text" name="name" placeholder='Enter Name' onChange={formik.handleChange}/></h3> <span>{formik.errors.name}</span>
      <h3><input type="text" name="email" placeholder='Enter Email' onChange={formik.handleChange}/></h3><span>{formik.errors.email}</span>
      <h3><input type="text" name="password" placeholder='Enter Password' onChange={formik.handleChange}/></h3><span>{formik.errors.password}</span>
      <button type="submit">Submit</button>
      </form>
      <p>{Message}</p>
    </div> 

  )
}

export default App;
