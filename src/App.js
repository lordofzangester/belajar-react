
import './App.scss';
import Sidebar from "./component/Navbar/Sidebar";
import {Route, Routes} from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";


function App() {
  return (
      <div className="App">
          <Sidebar />
          <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path="/contact" element={<Contact></Contact>}></Route>
          </Routes>
      </div>
  );
}

export default App;
