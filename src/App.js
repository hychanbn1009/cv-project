import React,{Component} from "react";
import './App.css'
import Contact from "./components/Contact";
import School from './components/School'
import Preview from './components/Preview'
import Job from "./components/Job";
import uniqid from "uniqid";

class App extends Component  {

  constructor() {
    super();

    this.state={
      name:'Tony',
      title:'Software developer',
      phone:'0899',
      email:'tony@gmail.com',
      summary:'Professional marketer manager with 5+ years of experience in digital marketing. Social media marketing experience, including Facebook, Google, and LinkedIn advertising. Experience in managing an account with a monthly budget of $30,000. B.A. in marketing management.',
      educations:[{
        schoolName:'School',
        schoolTitle:'Secondary School',
        studyDate:'08/2009',
        gradDate:'09/2015',
        id: uniqid()
      }],
      jobs:[{
        companyName:'Kao',
        positionTitle:'KA',
        duty:'',
        dateFrom:'09/2015',
        dateTo:'08/2009',
        id: uniqid()
      }],
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.educationChange = this.educationChange.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.removeEducation = this.removeEducation.bind(this);
    this.jobChange = this.jobChange.bind(this);
    this.addJobButton = this.addJobButton.bind(this);
    this.removeJobButton = this.removeJobButton.bind(this);
  }

  handleInputChange(field,value) {
    this.setState({
      [field]: value,
    });
  }

  educationChange(name,value, index) {
    const input_educations=[...this.state.educations]
    input_educations[index][name]=value;
    this.setState({
      educations:input_educations
  })}

  addEducation=(event)=>{
    event.preventDefault();
    const add_educations=[...this.state.educations,{
      schoolName:'',
      schoolTitle:'',
      studyDate:'',
      gradDate:'',
    }];
    this.setState({
      educations:add_educations
    })
  }

  removeEducation=(event,index)=>{
    const remove_educations=[...this.state.educations];
    remove_educations.splice(index,1)
    this.setState({
      educations:remove_educations
    })
  }

  jobChange(name,value, index) {
    const input_jobs=[...this.state.jobs]
    input_jobs[index][name]=value;
    this.setState({
      jobs:input_jobs
  })}

  addJobButton=(event)=>{
    event.preventDefault();
    const add_jobs=[...this.state.jobs,{
      companyName:'',
      positionTitle:'',
      duty:'',
      dateFrom:'',
      dateTo:'',
      id: uniqid()
    }];
    this.setState({
      jobs:add_jobs
    })
  }

  removeJobButton=(event,index)=>{
    event.preventDefault();
    const remove_jobs=[...this.state.jobs];
    remove_jobs.splice(index,1)
    this.setState({
      jobs:remove_jobs
    })
  }

  render(){
    const {name,email,title,phone,summary,educations,jobs}=this.state;
    return (
      <div>
        <div className='title'>CV Maker</div>
          <div className='body'>
            <div className='inputfield'>
              <Contact name={name} email={email} phone={phone} title={title} summary={summary} onChange={this.handleInputChange}/>
              <Job jobs={jobs} removeJobButton={this.removeJobButton} jobChange={this.jobChange} addJobButton={this.addJobButton}/>
              <School educations={educations} removeEducation={this.removeEducation} educationChange={this.educationChange} addEducation={this.addEducation}/>
            </div>
            <div className='preview'>
            <Preview name={name} email={email} phone={phone} title={title} summary={summary} educations={educations} jobs={jobs}/>  
            </div>
          </div>
      </div>
    );
  }
}

export default App;
