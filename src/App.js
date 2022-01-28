import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert'
import { Redirect, Route, Switch } from "react-router";
import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
 
function App() {

  const [mode,setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  //passing object into state
  const showAlert = (message, type)=>{
   setAlert({
   msg:message,
   type:type
  })

}

  const toggleMode = () =>{
  if(mode=== 'light'){
   setMode('dark')
   document.body.style.backgroundColor='#0f4562'
  //  document.body.style.color='green'
  //showAlert("Dark mode has been enabled","success")
  document.title='TextUtil - Dark mode'
  }
  else{
   setMode('light')
   document.body.style.backgroundColor='white'
  //  document.body.style.color='yellow'
  //showAlert("Light mode has been enabled","success")
  document.title='TextUtil - Light mode'
  }
}

  return (
   <>
   
   {/* /component -> component1
   /component/user2 -> component2 */}

  {/* <Router> */}
 <Navbar mode={mode} toggleMode={toggleMode} title="Text Utility" aboutText="About"/>
  {/* <Navbar/> */}
{/* <Alert alert={alert}/> */}

 {/* <Switch> */}
  <div className="container my-3">
    {/* <Route exact path="/"> */}
   <TextForm heading="Enter the text to analyse" mode={mode}/>
   {/* </Route> */}
   {/* <Route exact path="/about">
   <About/>
   </Route> */}

   </div>
   {/* </Switch>
  </Router> */}
  </> 
  );
}


export default App;