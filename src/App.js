import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Pages from "./Pages/Pages";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/about" element={<About/>}/>
        <Route path= "/service" element={<Service/>} />
        <Route path="/pages" element={<Pages/>} />
        <Route path="blogs" element={<Blogs/>} />
        <Route path="/contact" element ={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
