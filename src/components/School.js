import React,{useState} from "react";

const School =()=>{
    const [schoolName,setSchoolName]=useState('');
    const [schoolTitle,setSchoolTitle]=useState('');
    const [studyDate,setStudyDate]=useState('');
    const [gradDate,setGradDate]=useState('');
    const [display,setDisplay]=useState(true);

    return(
        <div>
            <form>
                {display && (<div className='personalInfo'>
                    <h3>Educational Experience</h3>
                    <p>School Name</p>
                    <input onChange={event=>setSchoolName(event.target.value)} value={schoolName} type='text' id='schoolName' placeholder='School Name'/>
                    <p>Title of study</p>
                    <input onChange={event=>setSchoolTitle(event.target.value)} value={schoolTitle} type='text' id='schoolTitle' placeholder='School Title'/>
                    <p>From:</p>
                    <input onChange={event=>setStudyDate(event.target.value)} value={studyDate} type='date' id='studyDate' placeholder='Entry Date'/>
                    <p>To:</p>
                    <input onChange={event=>setGradDate(event.target.value)} value={gradDate} type='date' id='gradDate' placeholder='Graduation Date'/>
                </div>)}
            </form>
            {display ===false && (<div>
                School Name:{schoolName}<br/>
                Title of study:{schoolTitle}<br/>
                From:{studyDate} -- {gradDate}
            </div>)}
            <button type="submit" onClick={()=>setDisplay(false)}>Submit</button>
            <button type="button" onClick={()=>setDisplay(false)}>Edit</button>
        </div>
    )
}
export default School;