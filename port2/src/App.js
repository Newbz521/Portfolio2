import { Routes, Route } from "react-router-dom";
import Landing from "./screens/landing.js";

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
