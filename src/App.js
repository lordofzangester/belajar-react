import './App.css';
import Layout from './component/Layout';
// import {Routes, Route} from 'react-router-dom';

function App() {
  function onClickHandler() {
    const input = document.getElementById("name");
    alert(`Hello, ${input.value}!`);
  }
  return (
      <div className="App">
          <Layout></Layout>
          <input type="text" id="name" placeholder="name"/>
          <input onClick={onClickHandler} type="button" id="btn" value="Submit"/>
      </div>
  );
}

export default App;
