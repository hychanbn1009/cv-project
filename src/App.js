import React,{Component} from "react";
import './App.css'

class App extends Component  {
  render(){
    return (
      <div>
        <div className='title'>CV Maker</div>
        <form>
          <div className='personalInfo'>
            <h3>Personal Information</h3>
            <p>Name</p>
            <input type='text' id='name' placeholder='Name'/>
            <p>Email</p>
            <input type='email' id='email' placeholder='Email'/>
            <p>Phone</p>
            <input type='tel' id='phone' placeholder='Phone'/>
          </div>
          <div className='educationalExperience'>
            <h3>Educational Experience</h3>
            <p>School Name</p>
            <input type='text' id='schoolName' placeholder='School Name'/>
            <p>Title of study</p>
            <input type='text' id='schoolTitle' placeholder='School Title'/>
            <p>Date of Study</p>
            <input type='date' id='studyDate' placeholder='Study Date'/>
          </div>
          <div className='practicalExperience'>
            <h3>Practical Experience</h3>
            <p>Company Name</p>
            <input type='text' id='companyName' placeholder='Company Name'/>
            <p>Position Title</p>
            <input type='text' id='positionTitle' placeholder='Position Title'/>
            <p>Job Duty</p>
            <input type='text' id='duty' placeholder='Job Duty'/>
            <p>Date From</p>
            <input type='date' id='dateFrom' placeholder='Date From'/>
            <p>Date To</p>
            <input type='date' id='dateTo' placeholder='Date To'/>
          </div>
          <button type="submit">Submit</button>
          <button type="button">Edit</button>
        </form>
      </div>
    );
  }
}

export default App;
