import React,{useState} from "react";

const Job =()=>{
    const [companyName,setCompanyName]=useState('');
    const [positionTitle,setPositionTitle]=useState('');
    const [duty,setDuty]=useState('');
    const [dateFrom,setDateFrom]=useState('');
    const [dateTo,setDateTo]=useState('');
    const [display,setDisplay]=useState(true);

    return(
        <div>
        <form>
            {display && (<div className='practicalExperience'>
            <h3>Practical Experience</h3>
                <p>Company Name</p>
                <input onChange={event=>setCompanyName(event.target.value)} value={companyName} type='text' id='companyName' placeholder='Company Name'/>
                <p>Position Title</p>
                <input onChange={event=>setPositionTitle(event.target.value)} value={positionTitle} type='text' id='positionTitle' placeholder='Position Title'/>
                <p>Job Duty</p>
                <input onChange={event=>setDuty(event.target.value)} value={duty} type='text' id='duty' placeholder='Job Duty'/>
                <p>From</p>
                <input onChange={event=>setDateFrom(event.target.value)} value={dateFrom} type='date' id='dateFrom' placeholder='Date From'/>
                <p>To</p>
                <input onChange={event=>setDateTo(event.target.value)} value={dateTo} type='date' id='dateTo' placeholder='Date To'/>
            </div>)}
        </form>
        {display ===false && (<div>
            Company Name:{companyName}<br/>
            Position Title:{positionTitle}<br/>
            Job Duty:{duty}
            From:{dateFrom} -- {dateTo}
        </div>)}
        <button type="submit" onClick={()=>setDisplay(false)}>Submit</button>
            <button type="button" onClick={()=>setDisplay(true)}>Edit</button>
    </div>
    )
}
export default Job;