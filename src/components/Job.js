import React,{useState} from "react";

const Job =(props)=>{
    const [display,setDisplay]=useState(true);

    const onFieldChange=(event)=> {
        // for a regular input field, read field name and value from the event
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        props.onChange(fieldName, fieldValue);
    }

    return(
        <div>
        <form>
            {display && (<div className='practicalExperience'>
            <h3>Practical Experience</h3>
                <p>Company Name</p>
                <input onChange={onFieldChange} value={props.companyName} type='text' name='companyName' placeholder='Company Name'/>
                <p>Position Title</p>
                <input onChange={onFieldChange} value={props.positionTitle} type='text' name='positionTitle'  placeholder='Position Title'/>
                <p>Job Duty</p>
                <input onChange={onFieldChange} value={props.duty} type='text' name='duty'  placeholder='Job Duty'/>
                <p>From</p>
                <input onChange={onFieldChange} value={props.dateFrom} type='text' name='dateFrom'  placeholder='Date From'/>
                <p>To</p>
                <input onChange={onFieldChange} value={props.dateTo} type='text' name='dateTo'  placeholder='Date To'/>
            </div>)}
        </form>
        {display ===false && (<div>
            Company Name:{props.companyName}<br/>
            Position Title:{props.positionTitle}<br/>
            Job Duty:{props.duty}<br/>
            From:{props.dateFrom} -- {props.dateTo}
        </div>)}
        <button type="submit" onClick={()=>setDisplay(false)}>Submit</button>
            <button type="button" onClick={()=>setDisplay(true)}>Edit</button>
    </div>
    )
}
export default Job;