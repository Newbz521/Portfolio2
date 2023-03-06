import { Routes, Route, Link } from "react-router-dom";
import Landing from "./screens/landing.js";
import Cover from "./components/cover/cover.js"

import Navbar from "./components/navbar/nav";
import { render } from "react-dom";

function App() {
  return (
    <div className="app-container">
      <Cover></Cover>
      <Landing></Landing>
    </div>
  );
}

export default App;
