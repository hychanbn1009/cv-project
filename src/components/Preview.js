import React from "react";
import '../styles/Preview.css'
import { Icon } from '@iconify/react';

const Preview=(props)=>{

    return(
        <div className='CVpage'>
            <div className='personalInfo'>
                <div className='contact'>
                    <h1>{props.name}</h1>
                    <h2>{props.title}</h2>
                </div> 
                <div className='contactInfo'>
                    <div className='contactMethod' id='phone'>
                        <Icon icon="bx:bxs-phone-call" width="20" height="20" />
                        <p>{props.phone}</p>
                    </div>
                    <div className='contactMethod' id='email'>
                        <Icon icon="ic:twotone-email" width="20" height="20" />
                        <p>{props.email}</p>
                    </div>
                </div>
            </div>   
            <p>{props.summary}</p> 
            <hr/>
            <div className='SchoolInfo'>
                <h2>Education</h2>
            </div>    

            
        </div>
    )
}

export default Preview;