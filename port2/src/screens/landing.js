import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./landing.css";
export default function Landing(props) {
  const [show, setShow] = useState("none");
  const [slideIn, setSlideIn] = useState({ display: "none" });
  const [toggle, setToggle] = useState(true);

  return (
    <div className="overallContainer">
      <div className="trainContainer">
        <div className="train">
          <div className="trainCar">
            <div className="trainWindow"></div>
            <div className="trainWindow"></div>
            <div className="trainWindow"></div>
          </div>
          <div className="trainCar">
            <div className="trainWindow"></div>
            <div className="trainWindow"></div>
            <div className="trainWindow"></div>
          </div>
          <div className="trainCar">
            <div className="trainWindow"></div>
            <div className="trainWindow"></div>
            <div className="trainWindow"></div>
          </div>
          <div className="trainCar">
            <div className="trainWindow"></div>
            <div className="trainWindow"></div>
            <div className="trainWindow"></div>
          </div>
          <div className="trainCar">
            <div className="trainWindow"></div>
            <div className="trainWindow"></div>
            <div className="trainWindow"></div>
          </div>
          <div className="trainCar">
            <div className="trainWindow"></div>
            <div className="trainWindow"></div>
            <div className="trainWindow"></div>
          </div>
        </div>
      </div>
      <>
        <div className="landingContainer1">
          <div className="station">
            <div class="randomOnecharMovement">
              <div class="randomOnelargeContainer">
                <div class="Lawboxer">
                  <div class="Lawcharacter">
                    <div class="Lawhead">
                      <div class="Lawface">
                        <div class="Laweyes"></div>
                        <div class="Laweyes2"></div>
                      </div>
                    </div>
                    <div class="LawupperBody">
                      <div class="LawleftArm"></div>
                      <div class="Lawtorso">
                        <div class="heart"></div>
                      </div>
                      <div class="LawrightArm"></div>
                    </div>
                    <div class="LawlowerBody">
                      <div class="LawleftLeg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="randomTwocharMovement">
              <div class="randomTwolargeContainer">
                <div class="Lawboxer">
                  <div class="Lawcharacter">
                    <div class="Lawhead">
                      <div class="Lawface">
                        <div class="Laweyes"></div>
                        <div class="Laweyes2"></div>
                      </div>
                    </div>
                    <div class="LawupperBody">
                      <div class="LawleftArm"></div>
                      <div class="Lawtorso">
                        <div class="heart"></div>
                      </div>
                      <div class="LawrightArm"></div>
                    </div>
                    <div class="LawlowerBody">
                      <div class="LawleftLeg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pole">
              <div className="poleThick"></div>
              <div className="poleCenter"></div>
              <div className="poleThick"></div>
            </div>
            <div className="storeContainer">
              <div className="lampContainer">
                <div className="lamp"></div>
                <div className="lamp2"></div>
              </div>
              <div className="stationSignContainer">Projects Ave.</div>
              <div className="store">
                <div className="storeTop">
                  <div className="storeName">NEWSSTAND</div>
                </div>
                <div className="storeBottom">
                  <div className="storeLeft"></div>
                  <div className="storeCenter">
                    <div className="storeCenterTop">
                      <div className="fridge">
                        <div className="fridgeBrand">COCA-COLA</div>
                        <div className="fridgeContent">
                          <div className="fridgeSoda"></div>
                        </div>
                      </div>
                      <div class="charMovement">
                        <div class="largeContainer">
                          <div class="boxer">
                            <div class="character">
                              <div class="head">
                                <div class="face">
                                  <div class="eyes"></div>
                                  <div class="eyes2"></div>
                                </div>
                              </div>
                              <div class="upperBody">
                                <div class="leftArm"></div>
                                <div class="torso">
                                  <div class="heart"></div>
                                </div>
                                <div class="rightArm"></div>
                              </div>
                              <div class="lowerBody">
                                <div class="leftLeg"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="storeCenterBottom">
                      <div className="magRow">
                        <div className="mags">
                          <div className="magazine">Project</div>
                          <div className="magazine">Project</div>
                          <div className="magazine">Project</div>
                        </div>
                        <div className="shelf"></div>
                      </div>
                      <div className="magRow">
                        <div className="mags">
                          <div className="magazine">Project</div>
                          <div className="magazine">Project</div>
                          <div className="magazine">Project</div>
                        </div>
                        <div className="shelf"></div>
                      </div>
                    </div>
                  </div>
                  <div className="storeRight"></div>
                </div>
              </div>
            </div>
            <div className="pole">
              <div className="stationName">
                <div className="stationNameBorder">
                  New York
                  <div className="trainNameContainer">
                    <div className="trainCircle">D</div>
                    <div className="trainCircle">B</div>
                  </div>
                </div>
              </div>
              <div className="poleThick"></div>
              <div className="poleCenter"></div>
              <div className="poleThick"></div>
            </div>
          </div>
          <div className="floorContainer">
            <div className="floorYellow"></div>
            <div className="floorBrown"></div>
          </div>
        </div>
      </>
      <>
        <div className="landingContainer2">
          <div className="station">
            <div className="storeContainer">
              <div className="lampContainer">
                {/* <div className="lamp"></div> */}
                <div className="lamp2"></div>
              </div>
            </div>
            <div className="middleContainer">
              <div class="randomOnecharMovement">
                <div class="randomOnelargeContainer">
                  <div class="Lawboxer">
                    <div class="Lawcharacter">
                      <div class="Lawhead">
                        <div class="Lawface">
                          <div class="Laweyes"></div>
                          <div class="Laweyes2"></div>
                        </div>
                      </div>
                      <div class="LawupperBody">
                        <div class="LawleftArm"></div>
                        <div class="Lawtorso">
                          <div class="heart"></div>
                        </div>
                        <div class="LawrightArm"></div>
                      </div>
                      <div class="LawlowerBody">
                        <div class="LawleftLeg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="randomTwocharMovement">
                <div class="randomTwolargeContainer">
                  <div class="Lawboxer">
                    <div class="Lawcharacter">
                      <div class="Lawhead">
                        <div class="Lawface">
                          <div class="Laweyes"></div>
                          <div class="Laweyes2"></div>
                        </div>
                      </div>
                      <div class="LawupperBody">
                        <div class="LawleftArm"></div>
                        <div class="Lawtorso">
                          <div class="heart"></div>
                        </div>
                        <div class="LawrightArm"></div>
                      </div>
                      <div class="LawlowerBody">
                        <div class="LawleftLeg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="benchContainer">
                <div className="bench">
                  <div className="lawrenceContainer">
                    <div class="LawcharMovement">
                      <div class="LawlargeContainer">
                        <div class="Lawboxer">
                          <div class="Lawcharacter">
                            <div class="Lawhead">
                              <div class="Lawface">
                                <div class="Laweyes"></div>
                                <div class="Laweyes2"></div>
                              </div>
                            </div>
                            <div class="LawupperBody">
                              <div class="LawleftArm"></div>
                              <div class="Lawtorso">
                                <div class="heart"></div>
                              </div>
                              <div class="LawrightArm"></div>
                            </div>
                            <div class="LawlowerBody">
                              <div class="LawleftLeg"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="poleMid">
              <div className="stationName">
                <div className="stationNameBorder">
                  New York
                  <div className="trainNameContainer">
                    <div className="trainCircle">D</div>
                    <div className="trainCircle">B</div>
                  </div>
                </div>
              </div>
              <div className="poleThick"></div>
              <div className="poleCenter"></div>
              <div className="poleThick"></div>
            </div>
            <div className="kioskContainer">
              <div className="stationSignContainer">About Me Street</div>
              <div className="kiosk">
                <div className="kioskLeft"></div>
                <div className="kioskMiddle">
                  KIOSK
                  <div className="kioskScreen">
                    <div className="kioskText">
                      {" "}
                      From architecture designer to software engineer, I bring
                      experience in turning a simple idea into reality. Included
                      in this process are the unsure beginnings of pre-planning,
                      to the nitty gritty works of production up to the beauty
                      of project completion. In order to execute all these
                      steps, I am well versed in working as a team in order to
                      provide the best quality of work throughout every phase. I
                      am aiming to utilize my experiences in order to support
                      the ongoing development of software engineering. For a
                      field still so young, I will work towards growing
                      alongside the seemingly infinite potential of software,
                      further improving the lives of everyone around us.{" "}
                    </div>
                  </div>
                </div>
                <div className="kioskRight"></div>
              </div>
            </div>
          </div>
          <div className="floorContainer">
            <div className="floorYellow"></div>
            <div className="floorBrown"></div>
          </div>
        </div>
      </>
      <>
        <div className="landingContainer3">
          <div className="station">
            <div className="pole">
              <div className="poleThick"></div>
              <div className="poleCenter"></div>
              <div className="poleThick"></div>
            </div>
            <div className="storeContainer">
              <div className="lampContainer">
                <div className="lamp"></div>
                <div className="lamp2"></div>
              </div>
            </div>
            <div className="pole">
              <div className="stationName">
                <div className="stationNameBorder">
                  New York
                  <div className="trainNameContainer">
                    <div className="trainCircle">D</div>
                    <div className="trainCircle">B</div>
                  </div>
                </div>
              </div>
              <div className="poleThick"></div>
              <div className="poleCenter"></div>
              <div className="poleThick"></div>
            </div>
          </div>
          <div className="floorContainer">
            <div className="floorYellow"></div>
            <div className="floorBrown"></div>
          </div>
        </div>
      </>
    </div>
  );
}
