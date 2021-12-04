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
                        <label htmlFor='phone'> {props.phone}</label>
                    </div>
                    <div className='contactMethod' id='email'>
                        <Icon icon="ic:twotone-email" width="20" height="20" />
                        <label htmlFor='email'> {props.email}</label>
                    </div>
                </div>
            </div>
            <p>Description</p>   
            <p>{props.summary}</p> 
            <hr/>
            <div className='experience'>
                <div className='workingInfo'>
                    <h2>Working Experience</h2>
                    {props.jobs.map((jobsDetails,i)=>{
                        return (
                            <div key={jobsDetails.id}>
                                <div className='lasting'>
                                {jobsDetails.dateFrom}-{jobsDetails.dateTo}
                                </div>
                                <div>{jobsDetails.companyName}</div>
                                <div>{jobsDetails.positionTitle}</div>
                            </div>
                        )
                    })}
                </div>
                <div className='schoolInfo'>
                    <h2>Education</h2>
                    {props.educations.map((educationDetails,i)=>{
                        return <li key={educationDetails.id}>
                            {educationDetails.schoolName}<br/>
                            {educationDetails.schoolTitle}<br/>
                            {educationDetails.studyDate}<br/>
                            {educationDetails.gradDate}
                            </li>
                    })}
                </div> 
            </div>     
        </div>
    )
}

export default Preview;