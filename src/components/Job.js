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
            <div className='title' id='experience-title'>Experience</div>
            {props.jobs.map((jobsDetails,i)=>{
                return(
                    <div>
                        <div className='personalInfo'>
                            <div className='inline-form'>
                                <div class='input-container ic1'>
                                    <input onChange={event => InputField(event, i)} value={jobsDetails.companyName} type='text' name='companyName' placeholder='' className='input'/>
                                    <div className='cut'></div>
                                    <label htmlFor='companyName' className='placeholder'>Company</label>
                                </div>
                                <div class='input-container ic1'>
                                    <input onChange={event => InputField(event, i)} value={jobsDetails.positionTitle} type='text' name='positionTitle'  placeholder='' className='input'/>
                                    <div className='cut'></div>
                                    <label htmlFor='text' className='placeholder'>Position</label>
                                </div>
                            </div>
                            <div class='input-container ic2'>
                                <input onChange={event => InputField(event, i)} value={jobsDetails.duty} type='text' name='duty'  placeholder='' className='input'/>
                                <div className='cut'></div>
                                <label htmlFor='duty' className='placeholder'>Duty</label>
                            </div>
                            <div className='inline-form'>
                                <div class='input-container ic1'>
                                    <input onChange={event => InputField(event, i)} value={jobsDetails.dateFrom} type='text' name='dateFrom'  placeholder='' className='input'/>
                                    <div className='cut'></div>
                                    <label htmlFor='dateFrom' className='placeholder'>From:</label>
                                </div>
                                <div class='input-container ic1'>
                                    <input onChange={event => InputField(event, i)} value={jobsDetails.dateTo} type='text' name='dateTo'  placeholder='' className='input'/>
                                    <div className='cut'></div>
                                    <label htmlFor='dateTo' className='placeholder'>To:</label>
                                </div>
                            </div>
                        </div>
                        <div className="btn-box">
                            {props.jobs.length !== 1 && <button
                            className='delete'
                            onClick={(event) => RemoveInput(event,i)}>Delete</button>}
                            {props.jobs.length - 1 === i && <button className='add' onClick={(event)=> props.addJobButton(event)}>Add</button>}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Job;