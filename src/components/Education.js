import React,{Component} from "react";

class Education extends Component  {
    constructor(){
        super();
        this.state={
            schoolName:'',
            schoolTitle:'',
            studyDate:'',
            gradDate:'',
            display:true
        }
    }

    onSchoolNameChange = (event)=>{
        this.setState({
            schoolName:event.target.value,
        })
    }

    onSchoolTitleChange = (event)=>{
        this.setState({
            schoolTitle:event.target.value,
        })
    }

    onStudyDateChange = (event)=>{
        this.setState({
            studyDate:event.target.value,
        })
    }    
    
    onGradDateChange = (event)=>{
        this.setState({
            gradDate:event.target.value,
        })
    }

    onSubmit = (event)=>{
        event.preventDefault();
        this.setState({
            display:false
        })
    }

    onEdit = (event)=>{
        this.setState({
            display:true
        })
    }

    render(){
        const {schoolName,schoolTitle,studyDate,gradDate}=this.state;
      return (
        <div>
            <form>
                {this.state.display && (<div className='personalInfo'>
                    <h3>Educational Experience</h3>
                    <p>School Name</p>
                    <input onChange={this.onSchoolNameChange} value={schoolName} type='text' id='schoolName' placeholder='School Name'/>
                    <p>Title of study</p>
                    <input onChange={this.onSchoolTitleChange} value={schoolTitle} type='text' id='schoolTitle' placeholder='School Title'/>
                    <p>From:</p>
                    <input onChange={this.onStudyDateChange} value={studyDate} type='date' id='studyDate' placeholder='Entry Date'/>
                    <p>To:</p>
                    <input onChange={this.onGradDateChange} value={gradDate} type='date' id='gradDate' placeholder='Graduation Date'/>
                </div>)}
            </form>
            {this.state.display ===false && (<div>
                School Name:{schoolName}<br/>
                Title of study:{schoolTitle}<br/>
                From:{studyDate} -- {gradDate}
            </div>)}
            <button type="submit" onClick={this.onSubmit}>Submit</button>
            <button type="button" onClick={this.onEdit}>Edit</button>
        </div>
        );
    }
}

export default Education;

