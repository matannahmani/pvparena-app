import { useForm } from "react-hook-form";
import { Loading,useToasts } from '@geist-ui/react'
import { useState } from 'react';
import {login} from "../auth/authprovider";
import React from 'react';
import {UserContext} from "../components/contextprovider";
import Router from 'next/router'

export default function Login() {
  const [toasts, setToast] = useToasts();
  const [loading, setLoading] = useState(false);
  const [user,setUser] = React.useContext(UserContext);
  const { register, errors, handleSubmit } = useForm({
      mode: "onChange"
    });
    const onSubmit = async (data) => {
     setLoading(true);
     login({...data}).then(data => {
        if (data.status === 401){
          setToast({text: data.data.toUpperCase(), type: 'error'});
          setTimeout( () => {
            setLoading(false);
          }, 1000);
        }
        else if (data.status.code === 200){
            setUser(true);
            setToast({text: "Logged in Successfully"});
            Router.push('/');
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
      <div className="submitbtn">
        {loading ? <Loading size="large"/> : <input name="login"type="submit"></input>}
            
      </div>
    </form>
  );
}