import React,{useState} from "react";

const School =(props)=>{
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
                {display && (<div className='personalInfo'>
                    <h3>Educational Experience</h3>
                    <p>School Name</p>
                    <input onChange={onFieldChange} value={props.schoolName} type='text' name='schoolName' placeholder='School Name'/>
                    <p>Title of study</p>
                    <input onChange={onFieldChange} value={props.schoolTitle} type='text' name='schoolTitle' placeholder='School Title'/>
                    <p>From:</p>
                    <input onChange={onFieldChange} value={props.studyDate} type='text' name='studyDate' placeholder='Entry Date'/>
                    <p>To:</p>
                    <input onChange={onFieldChange} value={props.gradDate} type='text' name='gradDate' placeholder='Graduation Date'/>
                </div>)}
            </form>
            {display ===false && (<div>
                School Name:{props.schoolName}<br/>
                Title of study:{props.schoolTitle}<br/>
                From:{props.studyDate} -- {props.gradDate}
            </div>)}
            <button type="submit" onClick={()=>setDisplay(false)}>Submit</button>
            <button type="button" onClick={()=>setDisplay(true)}>Edit</button>
        </div>
    )
}
export default School;