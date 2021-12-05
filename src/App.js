import React,{Component} from "react";
import './App.css'
import Contact from "./components/Contact";
import School from './components/School'
import {Preview} from './components/Preview'
import Job from "./components/Job";
import uniqid from "uniqid";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import Footer from "./components/Footer";

class App extends Component  {
  componentRef = null;
  constructor() {
    super();

    this.state={
      name:'',
      title:'',
      phone:'',
      email:'',
      summary:'',
      educations:[{
        schoolName:'',
        schoolTitle:'',
        studyDate:'',
        gradDate:'',
        id: uniqid()
      }],
      jobs:[{
        companyName:'',
        positionTitle:'',
        duty:'',
        dateFrom:'',
        dateTo:'',
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
    this.exampleButton=this.exampleButton.bind(this);
    this.resetButton=this.resetButton.bind(this);
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

  // copy array from original array
  // change the element in array according to its name value and index
  // set array to copied array
  jobChange(name,value, index) {
    const input_jobs=[...this.state.jobs]
    input_jobs[index][name]=value;
    this.setState({
      jobs:input_jobs
  })}

  // add add button to children component
  // prevent page refresh
  // copy array from an original array and all new object into array
  // set array to copied array
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

  // add remove button to children component
  // prevent page refresh
  // copy array from an original array
  // remove selected element by index in copied array
  // set array to copied array
  removeJobButton=(event,index)=>{
    event.preventDefault();
    const remove_jobs=[...this.state.jobs];
    remove_jobs.splice(index,1)
    this.setState({
      jobs:remove_jobs
    })
  }

  // Clear all input field
  resetButton=()=>{
    this.setState({
      name:'',
      title:'',
      phone:'',
      email:'',
      summary:'',
      educations:[{
        schoolName:'',
        schoolTitle:'',
        studyDate:'',
        gradDate:'',
        id: uniqid()
      }],
      jobs:[{
        companyName:'',
        positionTitle:'',
        duty:'',
        dateFrom:'',
        dateTo:'',
        id: uniqid()
      }],
    })
  }

  // render CV example to user
  exampleButton=()=>{
    this.setState({
      name:'Tony Wong',
      title:'Assistant Marketing Manager',
      phone:'12345678',
      email:'tonywong@gmail.com',
      summary:'Professional marketer manager with 5+ years of experience in digital marketing. Social media marketing experience, including Facebook, Google, and LinkedIn advertising. Experience in managing an account with a monthly budget of $30,000. B.A. in marketing management.',
      educations:[{
        schoolName:'University of Hong Kong',
        schoolTitle:'Bachelor of Arts (Hons) Marketing',
        studyDate:'08/2005',
        gradDate:'09/2011',
        id: uniqid()
      },{
        schoolName:'University of Hong Kong',
        schoolTitle:'Master of Science in Marketing',
        studyDate:'08/2013',
        gradDate:'09/2015',
        id: uniqid()
      }],
      jobs:[{
        companyName:'ABC Company',
        positionTitle:'Marketing Executive',
        duty:'Find new clients, present product details, close deals independently',
        dateFrom:'09/2011',
        dateTo:'08/2013',
        id: uniqid()
      },{
        companyName:'DDD Company',
        positionTitle:'Marketing Manager',
        duty:'Lead the team to formulate extra sales channel for promtion, including joint promotion',
        dateFrom:'09/2015',
        dateTo:'08/2018',
        id: uniqid()
      }
    ],
    })
  }


  render(){
    const {name,email,title,phone,summary,educations,jobs}=this.state;
    return (
      <div className='container'>
        <div className='header'>CV Maker</div>
          <div className='body'>
            <div className='inputfield'>
              <Contact name={name} email={email} phone={phone} title={title} summary={summary} onChange={this.handleInputChange}/>
              <Job jobs={jobs} removeJobButton={this.removeJobButton} jobChange={this.jobChange} addJobButton={this.addJobButton}/>
              <School educations={educations} removeEducation={this.removeEducation} educationChange={this.educationChange} addEducation={this.addEducation}/>
              <ReactToPrint content={() => this.componentRef}>
              <button className='resetButton' onClick={this.resetButton}>Reset</button>
              <button className='exampleButton' onClick={this.exampleButton}>Example</button>
              <PrintContextConsumer>
                {({ handlePrint }) => (
                  <button className='print-cv' onClick={handlePrint}>Print this out!</button>
                )}
              </PrintContextConsumer>
              </ReactToPrint>
            </div>
            <div className='preview'>
              <Preview ref={el => (this.componentRef = el)}  name={name} email={email} phone={phone} title={title} summary={summary} educations={educations} jobs={jobs} />  
            </div>
          </div>
          <div className='footer'><Footer/></div>
      </div>
    );
  }
}

export default App;
