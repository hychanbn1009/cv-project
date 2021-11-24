import React,{Component} from "react";

class App extends Component  {
  render(){
    return (
      <div>
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
            <input type='date' id='duty' placeholder='Job Duty'/>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
