import { scaleDown as Menu } from 'react-burger-menu'
import Link from 'next/link'
import {UserContext} from "../components/contextprovider";
import React from 'react';
import { logout } from '../auth/authprovider';
import { useToasts } from '@geist-ui/react'
import Router from 'next/router';
export default function Navbar(){
    const [toasts, setToast] = useToasts();
    const [user,setUser] = React.useContext(UserContext);
    const signout = () =>{
        setToast({text: "Logged Out in Successfully"});
        setUser(logout());
        Router.push('/');
    }
    return (
        <Menu pageWrapId={ "page-wrap" } width={ 200 } animation={"bubble"} outerContainerId={ "__next" }>
        <Link href="/">
        <a id="home" tabIndex="-1" style={{display: 'block'}} className="bm-item menu-item">Home</a>
        </Link>
        {
        user === false ? <>
        <Link href="/login">
        <a id="login" tabIndex="-1" style={{display: 'block'}} className="bm-item menu-item">Login</a>
        </Link>
        <Link href="/signup">
        <a id="signup" tabIndex="-1" style={{display: 'block'}} className="bm-item menu-item">Signup</a>
        </Link>
        </>
        :
        <>
        <Link href="/">
        <a id="logout" tabIndex="-1" style={{display: 'block'}} onClick={() => signout()} className="bm-item menu-item">Logout</a>
        </Link>
        </>
        }
        </Menu>
    )
};