import React,{Component} from "react";
import General from "./components/General";
import Education from "./components/Education";
import Working from "./components/Working";
import './App.css'

class App extends Component  {

  render(){
    return (
      <div>
        <div className='title'>CV Maker</div>
          <General/>
          <Education/>
          <Working/>
      </div>
    );
  }
}

export default App;
