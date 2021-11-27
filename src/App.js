import React,{Component} from "react";
import './App.css'
import Contact from "./components/Contact";
import School from "./components/School";
import Job from "./components/Job";

class App extends Component  {

  render(){
    return (
      <div>
        <div className='title'>CV Maker</div>
          <Contact/>
          <School/>
          <Job/>
      </div>
    );
  }
}

export default App;
