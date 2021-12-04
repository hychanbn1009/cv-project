import React from "react";
import '../styles/Contact.css'

const Contact=(props)=>{

    const onFieldChange=(event)=> {
        // for a regular input field, read field name and value from the event
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        props.onChange(fieldName, fieldValue);
    }

    return(
        <div>
            <div>
                <div className='personalInfo'>
                    <h3>Personal Information</h3>
                    <label htmlFor='name'>Name</label>
                    <input onChange={onFieldChange} value={props.name} type='text' name='name' placeholder='Name'/>
                    <label htmlFor='title'>Title</label>
                    <input onChange={onFieldChange} value={props.title} type='text' name='title' placeholder='Title'/>
                    <label htmlFor='email'>Email</label>
                    <input onChange={onFieldChange} value={props.email} type='email' name='email' placeholder='Email'/>
                    <label htmlFor='phone'>Phone</label>
                    <input onChange={onFieldChange} value={props.phone} type='tel' name='phone' placeholder='Phone'/>
                    <label htmlFor='summary'>Summary</label>
                    <textarea onChange={onFieldChange} value={props.summary} name='summary' placeholder='Summary'/>
                </div>
            </div>
        </div>
    )
}

export default Contact;