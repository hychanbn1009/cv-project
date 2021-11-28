import React,{Component} from "react";
import './App.css'
import Contact from "./components/Contact";
import School from './components/School'
import Job from './components/Job'
import Preview from "./components/Preview";

class App extends Component  {
  constructor(props) {
    super(props);
    // this.state={
    //   name:'',
    //   title:'',
    //   phone:'',
    //   email:'',
    //   education:{
    //     schoolName:'',
    //     schoolTitle:'',
    //     studyDate:'',
    //     gradDate:'',
    //   },
    //   educations:[],
    //   job:{
    //     companyName:'',
    //     positionTitle:'',
    //     duty:'',
    //     dateFrom:'',
    //     dateTo:'',
    //   }
    // }
    this.state={
      name:'Tony',
      title:'Software developer',
      phone:'0899',
      email:'tony@gmail.com',
      summary:'Professional marketer manager with 5+ years of experience in digital marketing. Social media marketing experience, including Facebook, Google, and LinkedIn advertising. Experience in managing an account with a monthly budget of $30,000. B.A. in marketing management.',
      education:{
        schoolName:'School',
        schoolTitle:'Secondary School',
        studyDate:'08/2009',
        gradDate:'09/2015',
      },
      educations:[],
      job:{
        companyName:'Good Limited',
        positionTitle:'Software developer',
        duty:'do something',
        dateFrom:'11/2020',
        dateTo:'11/2020',
      }
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleJobChange = this.handleJobChange.bind(this);
  }

  handleInputChange(field,value) {
    this.setState({
      [field]: value
    });
  }

  handleEducationChange(field,value) {
    this.setState({
      education:{
        ...this.state.education,
        [field]: value,
      }
    });
  }

  handleJobChange(field,value) {
    this.setState({
      job:{
        ...this.state.job,
        [field]: value,
      }
    });
  }

  render(){
    const {name,email,title,phone,summary,education:{schoolName}}=this.state;
    return (
      <div>
        <div className='title'>CV Maker</div>
          <div className='body'>
            <div className='inputfield'>
              <Contact name={name} email={email} phone={phone} title={title} summary={summary} onChange={this.handleInputChange}/>
              <School schoolName={this.state.education.schoolName} schoolTitle={this.state.education.schoolTitle} studyDate={this.state.education.studyDate} gradDate={this.state.education.gradDate} onChange={this.handleEducationChange}/>
              <Job companyName={this.state.job.companyName} positionTitle={this.state.job.positionTitle} duty={this.state.job.duty} dateFrom={this.state.job.dateFrom} dateTo={this.state.job.dateTo} onChange={this.handleJobChange}/>
            </div>
            <div className='preview'>
              <Preview 
              name={name}
              email={email}
              phone={phone}
              title={title}
              schoolName={schoolName}
              summary={summary}
               />
            </div>
          </div>  
      </div>
    );
  }
}

export default App;
