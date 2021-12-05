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
            <div className='title' id='education-title'>Education</div>
            {props.educations.map((educationDetails,i)=>{
                return(
                    <form>
                        <div className='personalInfo'>

                            <div class='input-container ic1'>
                                <input onChange={event => InputField(event, i)} value={educationDetails.schoolName} type='text' name='schoolName' placeholder='' className='input'/>
                                <div className='cut'></div>
                                <label htmlFor='schoolName' className='placeholder'>School</label>
                            </div>
                            <div class='input-container ic1'>
                                <input onChange={event => InputField(event, i)} value={educationDetails.schoolTitle} type='text' name='schoolTitle' placeholder='' className='input'/>
                                <div className='cut'></div>
                                <label htmlFor='schoolTitle' className='placeholder'>Subject</label>
                            </div>
                            <div className='inline-form'>
                                <div class='input-container ic1'>
                                    <input onChange={event => InputField(event, i)} value={educationDetails.studyDate} type='text' name='studyDate' placeholder='' className='input'/>
                                    <div className='cut'></div>
                                    <label htmlFor='studyDate' className='placeholder'>From:</label>
                                </div>
                                <div class='input-container ic1'>
                                    <input onChange={event => InputField(event, i)} value={educationDetails.gradDate} type='text' name='gradDate' placeholder='' className='input'/>
                                    <div className='cut'></div>
                                    <label htmlFor='gradDate' className='placeholder'>To:</label>
                                </div>
                            </div>
                        </div>
                        <div className="btn-box">
                            {props.educations.length !== 1 && <button
                            className='delete'
                            onClick={(event) => RemoveInput(event,i)}>Delete</button>}
                            {props.educations.length - 1 === i && <button className='add' onClick={(event)=> props.addEducation(event)}>Add</button>}
                        </div>
                    </form>
                )
            })}
        </div>
    )
}
export default School;