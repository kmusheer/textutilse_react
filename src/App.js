// import logo from './logo.svg';
import './App.css';
// import About from './component/About';
import TextForm from './component/TextForm.js';
import Navbar from './component/Navbar.js';
import React, { useState } from 'react'
// import Alert from './component/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


// let name = 'Musheer'
function App() {
  const [modeName, setmodeName] = useState("Enabel dark mode");
  const [mode, setMode] = useState('light');
  // const [alerts, setalerts] = useState('null')
  // const showalerts = (type, message)=>{
  //   setalerts({
  //     type: type,
  //     msg : message
  //   })
  //   setTimeout(() => {
  //     setalerts(null)
  //   }, 2000);
  // }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      setmodeName("Enable light mode");
      // showalerts("Success", "Dark mode enabled")
      document.title = ("TextUtils - Home dark-mode")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      setmodeName("Enable dark mode");
      // showalerts("dark", "Light mode enabled")
      document.title = ("TextUtils - Home")
    }
  }
  return (
    <>
      {/* <Router> */}
        <div className="container">
        <Navbar title="Texutils" aboutText="About us" mode={mode} toggleMode={toggleMode} modeName={modeName} />
        {/* <Navbar /> */}
        {/* <Alert alert ={alerts} /> */}
          {/* <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/" element={<TextForm heading="Enter text to utilize" mode={mode} />} /> 
            </Routes>
        // </Router>*/}
            {<TextForm heading="Enter text to utilize" mode={mode} />}
        </div>

    </>
  );
}

export default App;