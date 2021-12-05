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
                    <div className='title'>Personal Information</div>
                    <div className='inline-form'>
                        <div class='input-container ic1'>
                                <input onChange={onFieldChange} value={props.name} type='text' name='name' placeholder='' className='input'/>
                                <div className='cut'></div>
                                <label htmlFor='name' className='placeholder'>Name</label>
                            </div>
                            <div class='input-container ic1'>
                                <input onChange={onFieldChange} value={props.title} type='text' name='title' placeholder='' className='input'/>
                                <div className='cut'></div>
                                <label htmlFor='title' className='placeholder'>Title</label>
                            </div>
                    </div>
                    <div className='inline-form'>
                        <div class='input-container ic1'>
                            <input onChange={onFieldChange} value={props.email} type='email' name='email' placeholder='' className='input'/>
                            <div className='cut'></div>
                            <label htmlFor='email' className='placeholder'>Email</label>
                        </div>
                        <div class='input-container ic1'>
                            <input onChange={onFieldChange} value={props.phone} type='tel' name='phone' placeholder='' className='input'/>
                            <div className='cut'></div>
                            <label htmlFor='phone' className='placeholder'>Phone</label>
                        </div>
                    </div>
                        <div class='input-container ic2'>
                            <input onChange={onFieldChange} value={props.summary} name='summary' placeholder='' className='input' id='textarea'/>
                            <div className='cut'></div>
                            <label htmlFor='summary' className='placeholder'>Summary</label>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;