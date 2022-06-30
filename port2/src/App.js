import { Routes, Route, Link } from "react-router-dom";
import Landing from "./screens/landing.js";
import { Parallax } from "react-scroll-parallax";
import Navbar from "./components/navbar/nav";
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
