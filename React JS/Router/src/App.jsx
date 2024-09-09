import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Blogs from "./Blogs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="homepage" element={<Home />} />
          <Route path="allBlogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
