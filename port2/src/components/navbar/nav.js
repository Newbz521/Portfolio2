import { useEffect, useState } from "react";
import "./nav.css";
import Resume from "../../files/Resume.pdf";
import { SiHomeadvisor, SiCodesandbox } from "react-icons/si";
import {RiContactsLine} from "react-icons/ri"
import { CgProfile } from "react-icons/cg";
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
        <li onClick={props.clickProjects} className="navLink">
          <div className="icon selected">
            {/* <SiCodesandbox /> */}
            <span className="link-name">

            Projects
            </span>
          </div>
        </li>
        <li onClick={props.clickAboutMe} className="navLink">
          <div className="icon selected">
            {/* <CgProfile /> */}
            <span className="link-name">

             About
            </span>
          </div>
        </li>
        <li onClick={props.clickContact} className="navLink">
          <div className="icon selected">
            {/* <RiContactsLine /> */}
            <span className="link-name">

            Contacts
            </span>
          </div>
        </li>
      </div>
    </nav>
  );
}

export default Nav;
