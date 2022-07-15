import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@mui/material';

const App = () => {
    const formik = useFormik({
        initialValues:{
            Name:'',
            Email:'',
            Channel:'',
            status:'',
            country:'',
            password:'',
            confrm:'',
        },
        validationSchema:Yup.object({
          Name:Yup.string().max(10,"error").required("This is required"),
          Email:Yup.string().email().max(15,"Email is to longer").required("This is required"),
          Channel:Yup.number("Eter Valid Number").required("This is required"),
          password:Yup.string().required("This is requirred",) .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
          ),
          confrm:Yup.string().oneOf([Yup.ref("password"),null],"Password must match")
        }),
        
        onSubmit:(values)=>{
          console.log("form submitted",values);
        }
    })
   console.log(formik.errors);
  return (
    <div className='main'>
       <div className='app'>
       <form noValidate onSubmit={formik.handleSubmit}>
          <label htmlFor='FirstName'>FirstName:</label><br />
          <input type="text" className='inputy' id="FirstName" name="Name" onChange={formik.handleChange}  value={formik.values.Name} onBlur={formik.handleBlur}></input>{formik.errors.Name && <p style={{color:"red"}}>{formik.errors.Name}</p>}<br/><br/>

          <label htmlFor='Email'>Email:</label><br />
          <input type="text" id="Email" className='inputy' name="Email"  onChange={formik.handleChange}  value={formik.values.Email}></input>{formik.errors.Email && <p style={{color:"red"}}>{formik.errors.Email}</p>}<br/><br/>
          
          <label htmlFor='Channel'>Number:</label><br />
          <input type="text" id="Channel" name="Channel" className='inputy'  onChange={formik.handleChange}  value={formik.values.Channel} ></input>{formik.errors.Channel && <p style={{color:"red"}}>{formik.errors.Channel}</p>}<br /><br />
          <label htmlFor='password'>Paassword:</label><br/>
          <input type="password" id="password" name="password" className='inputy' onChange={formik.handleChange}  value={formik.values.password} ></input>{formik.errors.password && <p style={{color:"red"}}>{formik.errors.password}</p>}<br /><br />
          <label htmlFor='confrm'>Confirm Password:</label>
          <input type='text' id='confrm' name='confrm' className='inputy' onChange={formik.handleChange} value={formik.values.confrm}></input>{formik.errors.confrm && <p style={{color:"red"}}>{formik.errors.confrm}</p>}<br/><br/>                                                                   
          <span>Status:</span><label>Male</label><input type="radio" name='status' value="Male" onChange={formik.handleChange}></input><label>Female</label><input type="radio" name='status' value="female" onChange={formik.handleChange}></input><br></br><br/>
          <select name='country' onChange={formik.handleChange}>
            <option value=''>--select your country--</option>
            <option value="pakistan">Pakistan</option>
            <option value="canada">Canada</option>
            <option value="finland">Finland</option>

          </select><br/><br></br>
         
          <Button variant="contained"style={{float:"right"}} type="submit" >Submit</Button>

       </form>

       </div>
    </div>
  )
}

export default App
