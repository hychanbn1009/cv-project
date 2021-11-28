import React,{useState} from "react";

const Contact=(props)=>{
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
                    <h3>Personal Information</h3>
                    <p>Name</p>
                    <input onChange={onFieldChange} value={props.name} type='text' name='name' placeholder='Name'/>
                    <p>Title</p>
                    <input onChange={onFieldChange} value={props.title} type='text' name='title' placeholder='Title'/>
                    <p>Email</p>
                    <input onChange={onFieldChange} value={props.email} type='email' name='email' placeholder='Email'/>
                    <p>Phone</p>
                    <input onChange={onFieldChange} value={props.phone} type='tel' name='phone' placeholder='Phone'/>
                    <p>Summary</p>
                    <textarea onChange={onFieldChange} value={props.summary} name='summary' placeholder='Summary'/>
                </div>)}
            </form>
            {display ===false && (<div>
                Name:{props.name}<br/>
                Title:{props.title}<br/>
                Email:{props.email}<br/>
                Phone:{props.phone}<br/>
                Summary:{props.summary}
            </div>)}
            <button type="submit" onClick={()=>setDisplay(false)}>Submit</button>
            <button type="button" onClick={()=>setDisplay(true)}>Edit</button>
        </div>
    )
}

export default Contact;