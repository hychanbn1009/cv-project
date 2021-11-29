import React,{useState} from "react";

const School =(props)=>{
    const [display,setDisplay]=useState(true);

    const onFieldChange=(event)=> {
        // for a regular input field, read field name and value from the event
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        const id=event.target.id
        console.log(event.target)
        props.onChange(fieldName, fieldValue,id);
    }

    const onSubmitChange=(event)=> {
        // for a regular input field, read field name and value from the event
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        const fieldId=event.target.id;
        console.log(fieldId)
        props.onSubmit(fieldName, fieldValue,fieldId);
    }


    return(
        <div>
            <form>
                <div className='personalInfo'>
                    <h3>Educational Experience</h3>
                    <p>School Name</p>
                    <input onChange={onFieldChange} value={props.educations.schoolName} type='text' name='schoolName' placeholder='School Name'/>
                    <p>Title of study</p>
                    <input onChange={onFieldChange} value={props.educations.schoolTitle} type='text' name='schoolTitle' placeholder='School Title'/>
                    <p>From:</p>
                    <input onChange={onFieldChange} value={props.educations.studyDate} type='text' name='studyDate' placeholder='Entry Date'/>
                    <p>To:</p>
                    <input onChange={onFieldChange} value={props.educations.gradDate} type='text' name='gradDate' placeholder='Graduation Date'/>
                </div>
            </form>
            {props.educations.map((education) => (
            <form key={education.id}>
                <div className='personalInfo'>
                    <h3>Educational Experience</h3>
                    <p>School Name</p>
                    <input onChange={onFieldChange} value={props.educations.schoolName} type='text' name='schoolName' placeholder='School Name'/>
                    <p>Title of study</p>
                    <input onChange={onFieldChange} value={props.educations.schoolTitle} type='text' name='schoolTitle' placeholder='School Title'/>
                    <p>From:</p>
                    <input onChange={onFieldChange} value={props.educations.studyDate} type='text' name='studyDate' placeholder='Entry Date'/>
                    <p>To:</p>
                    <input onChange={onFieldChange} value={props.educations.gradDate} type='text' name='gradDate' placeholder='Graduation Date'/>
                </div>
            </form>)
            )}
                <button type="submit" onClick={onSubmitChange}>Submit</button>
                <button type="button" onClick={()=>setDisplay(false)}>Edit</button>
        </div>
    )
}
export default School;