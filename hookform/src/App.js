import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    firstName: yup.string().required(),
    Email: yup.string().email().required(),
    number:yup.number().required(),
    password:yup.string().required("This is requirred",) .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
      confirmpassword:yup.string().oneOf([yup.ref("password"),null],"Password must match"),
  }).required();

const App = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      const onSubmit = data => console.log(data);
    
  return (
    <div className='main'>
        <div className='app'>
             <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='firstname'>First Name:</label><br/>
      <input {...register("firstName")} className="inputy" />
      <p style={{color:'red'}}>{errors.firstName?.message}</p>
        <label htmlFor='Email'>Email:</label><br/>
      <input {...register("Email")} className="inputy"  />
      <p style={{color:'red'}}>{errors.Email?.message}</p>
      <label htmlFor='number'>Number:</label><br/>
      <input {...register("number") } className="inputy"  />
      <p style={{color:'red'}}>{errors.number?.message}</p>
      <label htmlFor='password'>Password:</label><br/>
      <input {...register("password")} className="inputy"  />
      <p style={{color:'red'}}>{errors.password?.message}</p>
      <label htmlFor='confirmpassword'>Confirm Password:</label><br></br>
      <input {...register("confirmpassword")} className="inputy" />
      <p style={{color:'red'}}>{errors.confirmpassword?.message}</p>    
      <br/>
      <input type="submit" className='btn' />
    </form>
        </div>

      
    </div>
  );
}

export default App;
