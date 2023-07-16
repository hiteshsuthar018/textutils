import './App.css';
import About from './Components/About';
import React, {useState } from 'react'
import PrivateRoutes from './Utils/PrivateRoutes';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const [stateText, setStateText] = useState('Enable');

  //toggle mode
  const toggleMode = ()=>{
    if(mode ==='light'){
      document.body.style.backgroundColor='#121212'
      setStateText('Disable')
      showAlert("Dark mode is enabled","success")
      setMode('dark')
      document.title = "TextUtils-DarkMode"
    }
    else{
      document.body.style.backgroundColor='white'
      showAlert("light mode is enabled","success")
      setStateText('Enable')
      setMode('light')
      document.title = "TextUtils-LightMode"
    }
  }
  //green mode
  const greenMode = ()=>{
    if(mode ==='light'){
      document.body.style.backgroundColor='green'
      setStateText('Disable')
      showAlert("green mode is enabled","success")
      setMode('dark')
    }
    else{
      document.body.style.backgroundColor='white'
      showAlert("light mode is enabled","success")
      setStateText('Enable')
      setMode('light')
    }
  }
  //blue mode
  const blueMode = ()=>{
    if(mode ==='light'){
      document.body.style.backgroundColor='#2835bf'
      setStateText('Disable')
      showAlert("blue mode is enabled","success")
      setMode('primary')
    }
    else{
      document.body.style.backgroundColor='white'
      showAlert("light mode is enabled","success")
      setStateText('Enable')
      setMode('light')
    }
  }
 
  //alert function
  const showAlert = (message,type)=>{
     setAlert(
      {
        msg:message,
        type:type
      },
      setTimeout(()=>{
       setAlert(null)
      },1500)
     )
  }
  //return statement
 
  return (
    <>
     <Navbar title="TextUtils" aboutText="about" blueMode={blueMode} mode={mode} toggleMode={toggleMode} greenMode={greenMode} stateText={stateText}/>
   


  <Alert alert={alert}/>
    <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
        <About/>


    
   </>
   
    );
}

export default App;