import React,{Component} from "react";

class Working extends Component  {
    constructor(){
        super();
        this.state={
            companyName:'',
            positionTitle:'',
            duty:'',
            dateFrom:'',
            dateTo:'',
            display:true
        }
    }

    onCompanyNameChange = (event)=>{
        this.setState({
            companyName:event.target.value,
        })
    }

    onPositionTitleChange = (event)=>{
        this.setState({
            positionTitle:event.target.value,
        })
    }

    onDutyChange = (event)=>{
        this.setState({
            duty:event.target.value,
        })
    }    
    
    onDateFromChange = (event)=>{
        this.setState({
            dateFrom:event.target.value,
        })
    }

    onDateToChange = (event)=>{
        this.setState({
            dateTo:event.target.value,
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
        const {companyName,positionTitle,duty,dateFrom,dateTo}=this.state;
        return (
            <div>
                <form>
                    {this.state.display && (<div className='practicalExperience'>
                    <h3>Practical Experience</h3>
                        <p>Company Name</p>
                        <input onChange={this.onCompanyNameChange} value={companyName} type='text' id='companyName' placeholder='Company Name'/>
                        <p>Position Title</p>
                        <input onChange={this.onPositionTitleChange} value={positionTitle} type='text' id='positionTitle' placeholder='Position Title'/>
                        <p>Job Duty</p>
                        <input onChange={this.onDutyChange} value={duty} type='text' id='duty' placeholder='Job Duty'/>
                        <p>From</p>
                        <input onChange={this.onDateFromChange} value={dateFrom} type='date' id='dateFrom' placeholder='Date From'/>
                        <p>To</p>
                        <input onChange={this.onDateToChange} value={dateTo} type='date' id='dateTo' placeholder='Date To'/>
                    </div>)}
                </form>
                {this.state.display ===false && (<div>
                    Company Name:{companyName}<br/>
                    Position Title:{positionTitle}<br/>
                    Job Duty:{duty}
                    From:{dateFrom} -- {dateTo}
                </div>)}
                <button type="submit" onClick={this.onSubmit}>Submit</button>
                <button type="button" onClick={this.onEdit}>Edit</button>
            </div>
        );
    }
}

export default Working;


