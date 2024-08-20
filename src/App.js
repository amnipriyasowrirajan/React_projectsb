import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Greet from "./components/Greet";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/greet/:name" element={<Greet />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
