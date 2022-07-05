import { Routes, Route, Link } from "react-router-dom";
import Landing from "./screens/landing.js";

import Navbar from "./components/navbar/nav";
import { render } from "react-dom";
import { ParallaxProvider } from "react-scroll-parallax";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
      </Routes>
    </>
  );
}

export default App;
