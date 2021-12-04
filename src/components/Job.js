import React from "react";

const Job =(props)=>{

    // handle input change
    const InputField = (event, index) => {
        const { name, value } = event.target;
        props.jobChange(name,value,index)
    };

    // handle click event of the Remove button
    const RemoveInput = (event,index) => {
        props.removeJobButton(event,index);
    };

    return(
        <div>
            <h3>Practical Experience</h3>
            {props.jobs.map((jobsDetails,i)=>{
                return(
                    <div>
                        <div className='personalInfo'>
                            <label htmlFor='companyName'>Company Name</label>
                            <input onChange={event => InputField(event, i)} value={jobsDetails.companyName} type='text' name='companyName' placeholder='Company Name'/>
                            <label htmlFor='text'>Position Title</label>
                            <input onChange={event => InputField(event, i)} value={jobsDetails.positionTitle} type='text' name='positionTitle'  placeholder='Position Title'/>
                            <label htmlFor='duty'>Job Duty</label>
                            <input onChange={event => InputField(event, i)} value={jobsDetails.duty} type='text' name='duty'  placeholder='Job Duty'/>
                            <label htmlFor='dateFrom'>From:</label>
                            <input onChange={event => InputField(event, i)} value={jobsDetails.dateFrom} type='text' name='dateFrom'  placeholder='Date From'/>
                            <label htmlFor='dateTo'>To:</label>
                            <input onChange={event => InputField(event, i)} value={jobsDetails.dateTo} type='text' name='dateTo'  placeholder='Date To'/>
                        </div>
                        <div className="btn-box">
                            {props.jobs.length !== 1 && <button
                            className="mr10"
                            onClick={(event) => RemoveInput(event,i)}>Remove</button>}
                            {props.jobs.length - 1 === i && <button onClick={(event)=> props.addJobButton(event)}>Add</button>}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Job;