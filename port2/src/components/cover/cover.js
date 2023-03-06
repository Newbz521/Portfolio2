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
    }, 1000)
    // setInterval(function () { setShift({ display: "none", height: "0"})
    // }, 3000)
  }

  return (
    <div className="cover-container" style={shift}>
      <div onClick={open} className="enter-button">
        <div className="metro-card" style={slide}></div>
        <div className="metro-slot">Swipe to Enter</div>
      </div>
      <div className="station-tag-wrap">
        <div className="station-bottom-line"></div>
        <div className="station-tag"><div className="line-tag"></div><div className="red-stop">Next Stop</div><div className="tag-name next-stop">Lawrence Station</div></div>
        <div className="station-tag"><div className="line-tag"></div><div className="tag-name">Nutrition</div></div>
        <div className="station-tag"><div className="line-tag"></div><div className="tag-name">Physical Therapy</div></div>
        <div className="station-tag"><div className="line-tag"></div><div className="tag-name">Architecture</div></div>
        <div className="station-tag"><div className="line-tag"></div><div className="tag-name">Software Engineer</div></div>
      </div>
      {/* <div className="window-wrap">
        <div className="window-section"></div>
        </div> */}
        {/* <div className="nyc-bg"> Welcome to New York City!</div> */}
  </div>
  );
}

export default Nav;
