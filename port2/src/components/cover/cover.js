import { useEffect, useState } from "react";
import "./cover.css";
import { SiHomeadvisor, SiCodesandbox } from "react-icons/si";
import {RiContactsLine} from "react-icons/ri"
import { CgProfile } from "react-icons/cg";
import { MdOutlineFileDownload } from "react-icons/md";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Nav(props) {
  const [color, setColor] = useState("");
  const [bg, setBg] = useState("");
  const [slide, setSlide] = useState({ transform: "translateX(120%)" })
  const [shift, setShift] = useState({ transform: "translateY(0)" })
  
  function open() {
    setSlide({ transform: "translateX(-120%)" })
    setInterval(function () { setShift({ height: "0", "transform-origin": "0 0"  });
    }, 1200)
    // setInterval(function () { setShift({ display: "none", height: "0"})
    // }, 3000)
  }

  return (
    <div className="cover-container" style={shift}>
      <div onClick={open} className="enter-button">
        <div className="metro-card" style={slide}></div>
        <div className="metro-slot">SWiPE</div>
      </div>
  </div>
  );
}

export default Nav;
