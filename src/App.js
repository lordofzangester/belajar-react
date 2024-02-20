
import './App.scss';
import Layout from './component/Layout/Layout';
import SideNavbar from "./component/SideNavbar";
import Content from "./component/Content";
// import {Routes, Route} from 'react-router-dom';

function App() {
  return (
      <div className="App">
          <SideNavbar />
          <Content />
      </div>
  );
}

export default App;
