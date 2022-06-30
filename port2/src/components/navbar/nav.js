import { useEffect, useState } from "react";
import "./nav.css";
import Resume from "../../files/Resume.pdf";
import { SiHomeadvisor, SiCodesandbox } from "react-icons/si";
import { BiUser } from "react-icons/bi";
import { MdOutlineFileDownload } from "react-icons/md";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Nav(props) {
  const [color, setColor] = useState("");
  const [bg, setBg] = useState("");

  return (
    <nav
      className="navContainer"
      style={{ color: props.color, background: props.bg }}
    >
      <div className="stickyNav">
        <li onClick={props.clickAboutMe} className="navLink">
          <div className="icon">
            <SiHomeadvisor />
          </div>
        </li>
        <li onClick={props.clickProjects} className="navLink">
          <div className="icon">
            <SiCodesandbox />
          </div>
        </li>
        <li onClick={props.clickContact} className="navLink">
          <div className="icon">
            <BiUser />
          </div>
        </li>
      </div>
    </nav>
  );
}

export default Nav;
