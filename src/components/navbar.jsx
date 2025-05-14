import { LuFileUser } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IconContext } from "react-icons";
import classes from "./navbar.module.css";


export function Navbar() {
  return (
    <IconContext.Provider value={{ color: "black" }}>
      <div className={classes.nav_container}>
        <div className={classes.nav_content}>
          <a href="https://drive.google.com/file/d/1VgmMqLtNfjtJNFNw-YLGFdGLuyWBmqM6/view?usp=sharing">
            <LuFileUser size={40} className={classes.nav_icon} />
            <span className={classes.tooltip}>My Resume</span>
          </a>
        </div>
        <div className={classes.nav_content}>
          <a href="https://www.linkedin.com/in/arvin-leung">
          <FaLinkedin size={40} className={classes.nav_icon} />
          <span className={classes.tooltip}>Linkedin</span>
          </a>
        </div>
        <div className={classes.nav_content}>
          <a href="https://github.com/Leung-Arvin">
          <FaGithub size={40} className={classes.nav_icon} />
          <span className={classes.tooltip}>GitHub</span>
          </a>
        </div>
        <div className={classes.nav_content}>
          <a href="mailto:leungarvin@gmail.com">
          <MdEmail size={40} className={classes.nav_icon} />
          <span className={classes.tooltip}>Email</span>
          </a>
        </div>
      </div>
    </IconContext.Provider>
  );
}
