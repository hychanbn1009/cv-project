import React from "react";

const School =(props)=>{

    // handle input change
    const InputField = (event, index) => {
        const { name, value } = event.target;
        props.educationChange(name,value,index)
    };

    // handle click event of the Remove button
    const RemoveInput = (event,index) => {
        event.preventDefault();
        props.removeEducation(event,index);
    };

    return(
        <div>
            <h3>Educational Experience</h3>
            {props.educations.map((educationDetails,i)=>{
                return(
                    <form>
                        <div className='personalInfo'>
                            <label htmlFor='schoolName'>School Name</label>
                            <input onChange={event => InputField(event, i)} value={educationDetails.schoolName} type='text' name='schoolName' placeholder='School Name'/>
                            <label htmlFor='schoolTitle'>Title of study</label>
                            <input onChange={event => InputField(event, i)} value={educationDetails.schoolTitle} type='text' name='schoolTitle' placeholder='School Title'/>
                            <label htmlFor='studyDate'>From:</label>
                            <input onChange={event => InputField(event, i)} value={educationDetails.studyDate} type='text' name='studyDate' placeholder='Entry Date'/>
                            <label htmlFor='gradDate'>To:</label>
                            <input onChange={event => InputField(event, i)} value={educationDetails.gradDate} type='text' name='gradDate' placeholder='Graduation Date'/>
                        </div>
                        <div className="btn-box">
                            {props.educations.length !== 1 && <button
                            className="mr10"
                            onClick={(event) => RemoveInput(event,i)}>Remove</button>}
                            {props.educations.length - 1 === i && <button onClick={(event)=> props.addEducation(event)}>Add</button>}
                        </div>
                    </form>
                )
            })}
        </div>
    )
}
export default School;