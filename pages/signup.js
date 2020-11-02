import { useForm } from "react-hook-form";
import { Loading,useToasts } from '@geist-ui/react'
import { useState } from 'react';
import {signup} from "../auth/authprovider";
export default function Login() {
  const [toasts, setToast] = useToasts();
  const [loading, setLoading] = useState(false);
  const { register, errors, handleSubmit } = useForm({
      mode: "onChange"
    });
    const onSubmit = async (data) => {
     setLoading(true); 
     signup({...data}).then(data => {
        if (data.status.code === 401){
        for (let i = 0; i < data.status.message.length; i++) {
            setTimeout(function timer() {
            setToast({text: data.status.message[i].toUpperCase(), type: 'error'})
            }, i * 500);
          }
          setTimeout(() => {      
            setLoading(false);
          }, 1000);
        }
        else if (data.status.code === 200){
            setToast({text: "Signed up Succesfully"});
        }
     });
    };
    
    return (
    <form className="authform" onSubmit={handleSubmit(onSubmit)}>

    <label htmlFor="email">Email</label>
    <input
        name="email"
        placeholder="kazutokirigaya@gmail.com"
        type="text"
        ref={register({
        required: "this is required",
        pattern: {
            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "Invalid email address"
        }
        })}
    />
    {errors.email && <p>{errors.email.message}</p>}
    <label htmlFor="password">Password</label>
    <input
        name="password"
        placeholder="******"
        type="password"
        ref={register({
        required: "this is required",
        minLength: {
            value: 6,
            message: "Min length is 6"
        }
        })}
    />
    {errors.password && <p>{errors.password.message}</p>}
      <label htmlFor="firstName">First Name</label>
      <input
        name="firstName"
        placeholder="Kazuto"
        ref={register({
          required: "this is a required",
          maxLength: {
            value: 20,
            message: "Max length is 20"
          },
          minLength: {
            value: 2,
            message: "Min length is 2"
        }
        })}
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <label htmlFor="lastName">Last Name</label>
      <input
        name="lastName"
        placeholder="Kirigaya"
        ref={register({
          required: "this is required",
          maxLength: {
            value: 20,
            message: "Max length is 20"
          },
          minLength: {
              value: 2,
              message: "Min length is 2"
          }
        })}
      />
      {errors.lastName && <p>{errors.lastName.message}</p>}
      <div className="submitbtn">
        {loading ? <Loading size="large"/> : <input type="submit"></input>}
            
      </div>
    </form>
  );
}