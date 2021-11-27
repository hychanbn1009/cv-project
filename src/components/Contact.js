import React,{useState} from "react";

const Contact=()=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [display,setDisplay]=useState(true);

    return(
        <div>
            <form>
                {display && (<div className='personalInfo'>
                    <h3>Personal Information</h3>
                    <p>Name</p>
                    <input onChange={event=>setName(event.target.value)} value={name} type='text' id='name' placeholder='Name'/>
                    <p>Email</p>
                    <input onChange={event=>setEmail(event.target.value)} value={email} type='email' id='email' placeholder='Email'/>
                    <p>Phone</p>
                    <input onChange={event=>setPhone(event.target.value)} value={phone} type='tel' id='phone' placeholder='Phone'/>
                </div>)}
            </form>
            {display ===false && (<div>
                Name:{name}<br/>
                Email:{email}<br/>
                Phone:{phone}
            </div>)}
            <button type="submit" onClick={()=>setDisplay(false)}>Submit</button>
            <button type="button" onClick={()=>setDisplay(true)}>Edit</button>
        </div>
    )
}

export default Contact;