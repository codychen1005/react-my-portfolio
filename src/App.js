import React from "react";
import './App.css';
import {Route} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from "./components/";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Cover from "./components/Cover";
import Contacts from "./components/Contacts";


function App() {
    return (
      <>
        <CssBaseline/>
        <Route exact path="/" component ={Home}/>
        <Route path="/resume" component ={Resume}/>
        <Route path="/cover" component ={Cover}/>
        <Route path="/projects" component ={Projects}/>
        <Route path="/contacts" component ={Contacts}/>
      </>
      );  
}

export default App;
