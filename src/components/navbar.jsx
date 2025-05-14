import { LuFileUser } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IconContext } from "react-icons";
import classes from './navbar.module.css'


export function Navbar() {
    return (
        <IconContext.Provider value={{color:"black"}} >
        <div className={classes.nav_container}>
            <LuFileUser size={40}/>
            <FaLinkedin size={40}/>
            <FaGithub size={40}/>
            <MdEmail size={40}/>
        </div>
        </IconContext.Provider>
    )
}