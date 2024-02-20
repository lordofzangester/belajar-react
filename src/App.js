import './App.css';
import SideBar from "./component/Navbar/Sidebar";
import {Route, Routes} from "react-router-dom";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Home from "./component/Home/Home";


function App() {
  return (
      <div className="app">
        <SideBar></SideBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
  );
}

export default App;
