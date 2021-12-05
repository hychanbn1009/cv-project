import React from "react";
import '../styles/Preview.css'
import { Icon } from '@iconify/react';


export const Preview = React.forwardRef((props, ref) => {

    return(
        <div className='CVpage' id='CV-preview' ref={ref}>
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
            <h2>Description</h2>   
            <p>{props.summary}</p> 
            <hr/>
            <div className='experience'>
                <div className='workingInfo'>
                    <h2>Working Experience</h2>
                    {props.jobs.map((jobsDetails,i)=>{
                        return (
                            <div className='details' key={jobsDetails.id}>
                                <div className='top'>
                                {jobsDetails.dateFrom}-{jobsDetails.dateTo}
                                </div>
                                <div className='bottom'>
                                    <div className='bold'>{jobsDetails.positionTitle}</div>
                                    <div>{jobsDetails.companyName}</div>
                                    <div>{jobsDetails.duty}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <hr/>
                <div className='schoolInfo'>
                    <h2>Education</h2>
                    {props.educations.map((educationDetails,i)=>{
                        return (
                            <div className='details' key={educationDetails.id}>
                            <div className='top'>
                            {educationDetails.studyDate}-{educationDetails.gradDate}
                            </div>
                            <div className='bottom'>
                                <div className='bold'>{educationDetails.schoolName}</div>
                                <div>{educationDetails.schoolTitle}</div>
                            </div>
                        </div>
                        )
                    })}
                </div> 
            </div>     
        </div>
    )
})
