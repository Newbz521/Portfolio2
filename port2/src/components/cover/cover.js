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
  const [stay,setStay] = useState({transform: "translateY(0)"})
  
  function open() {
    setSlide({ transform: "translateX(-120%)" })
    // setStay({ transform: "translateY(100%)" })
    setInterval(function () {setStay({ transform: "translateX(-100%)" });
  }, 300)
  //   setInterval(function () { setShift({ transform:"translateX(100%)"  });
  // }, 1000)
    setInterval(function () { setShift({ height: "0", "transform-origin": "0 0"  });
    }, 300)
    // setInterval(function () { setShift({ display: "none", height: "0"})
    // }, 3000)
  }

  return (
 
    <div className="cover-container"style={shift} >
      {/* <div className="cover-hidden" >  */}
      <div className="station-tag-wrap" >
        {/* <div className="cover-left" >
          <div></div>
        </div> */}
        <div className="cover-right">
        <div className="cover-right-container">

          
        <div className="name-description" style={{fontSize:"2svh"}}>-Hello there!</div>

          <div className="name-description">I'm 
            <span className="name-title"> Lawrence</span> Yee
          
          </div>
          <div className="name-description" style={{fontSize:"2svh"}}>I am a Software Engineer | Architecture Designer</div>
          <div className="name-description" style={{fontSize:"2svh"}}>Passion for turning designs into reality</div>
          <div onClick={open} className="enter-button">
            Enter Site
          </div>
          </div>
        </div>

      </div>
      {/* </div> */}
      </div>
  );
}

export default Nav;
