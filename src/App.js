import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/about"
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

//import About from "./components/About";
function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState();

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type: type
    })
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.color = 'white';
      document.body.style.backgroundColor = '#212529'
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
        <Route path="/About" element={<About />} />
          <Route path="/" element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} />} />
         </Routes>
         
          {/* <About/> */}
      </div>
     </Router>
    </>
  );
}

export default App;
