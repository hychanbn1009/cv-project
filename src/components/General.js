import React, { Component } from 'react';

class General extends Component{

    constructor(){
        super();
        this.state={
          name:'',
          email:'',
          phone:'',
          display:true
        }
    }

    onNameChange = (event)=>{
        this.setState({
          name:event.target.value,
        })
    }

    onEmailChange = (event)=>{
        this.setState({
          email:event.target.value,
        })
    }

    onPhoneChange = (event)=>{
        this.setState({
          phone:event.target.value,
        })
    }

    onSubmit = (event)=>{
        event.preventDefault();
        this.setState({
            display:false
        })
    }

    onEdit = (event)=>{
        this.setState({
            display:true
        })
    }

    render(){
        const {name,email,phone}=this.state;
        return (
        <div>
            <form>
                {this.state.display && (<div className='personalInfo'>
                    <h3>Personal Information</h3>
                    <p>Name</p>
                    <input onChange={this.onNameChange} value={name} type='text' id='name' placeholder='Name'/>
                    <p>Email</p>
                    <input onChange={this.onEmailChange} value={email} type='email' id='email' placeholder='Email'/>
                    <p>Phone</p>
                    <input onChange={this.onPhoneChange} value={phone} type='tel' id='phone' placeholder='Phone'/>
                </div>)}
            </form>
            {this.state.display ===false && (<div>
                Name:{name}<br/>
                Email:{email}<br/>
                Phone:{phone}
            </div>)}
            <button type="submit" onClick={this.onSubmit}>Submit</button>
            <button type="button" onClick={this.onEdit}>Edit</button>
        </div>
        );
    }
}

export default General;