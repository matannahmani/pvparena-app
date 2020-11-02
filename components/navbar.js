import { scaleDown as Menu } from 'react-burger-menu'
import Link from 'next/link'

export default function Navbar(){
    return (
        <Menu pageWrapId={ "page-wrap" } width={ 200 } animation={"bubble"} outerContainerId={ "__next" }>
        <Link href="/">
        <a id="home" tabIndex="-1" style={{display: 'block'}} className="bm-item menu-item">Home</a>
        </Link>
        <Link href="/login">
        <a id="login" tabIndex="-1" style={{display: 'block'}} className="bm-item menu-item">Login</a>
        </Link>
        <Link href="/signup">
        <a id="signup" tabIndex="-1" style={{display: 'block'}} className="bm-item menu-item">Signup</a>
        </Link>
        </Menu>
    )
};