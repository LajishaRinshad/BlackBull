import React, { Component } from 'react';
import axios from 'axios';
import './Enquiry.css';

export default class Form extends Component {


state={
    name:'',
    email:'',
    message:'',
    sent:false,
    phoneNumber: '',
    loading: false
}


handleName = (e)=>{
this.setState({
  name:e.target.value
})
}

handlePhoneNumber = (e)=>{
  this.setState({
    phoneNumber:e.target.value
  })
  }

handleEmail = (e)=>{
  this.setState({
    email:e.target.value
  })
  }

handleMessage = (e)=>{
  this.setState({
    message:e.target.value
  })
  }

formSubmit=(e)=>{
  e.preventDefault();
 
 
  
  let data = {
    name:this.state.name,
    phoneNumber:this.state.phoneNumber,
    email:this.state.email,
    message:this.state.message
  }


    this.setState({
        loading:true
    })

  
  axios.post(`${process.env.REACT_APP_API_URL}api/forma`,data)
  .then(res=>{
    this.setState({
        sent:true,
        loading: false
    },this.resetForm())
  })
  .catch(()=>{
    console.log('message not send');
  })
  
 
 }

// for reseting the form data
resetForm=()=>{
  this.setState({
    name:'',
    phoneNumber:'',
    message:'',
    email:'',
    loading: false
  })

  setTimeout(()=>{
    this.setState({
      sent:false
    })
  },5000)
}

    render() {
        return (
        

            <div className='enq-div'>
            
                <div className="contactForm-1">
            
                    <form onSubmit={this.formSubmit}>
                        <h2>Reach out to us</h2>
                        <p>Fill in the form to learn more!</p>
                        <div className="inputBox">
                            <input 
                                type="text" 
                                name="" required
                                value={this.state.name}
                                onChange={this.handleName}

                            />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="inputBox">
                            <input 
                                type="email" 
                                name="" required
                                value={this.state.email}
                                onChange={this.handleEmail}
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="inputBox">
                            <input 
                                type="text" 
                                name="" required
                                value={this.state.phoneNumber}
                                onChange={this.handlePhoneNumber}
                            />
                            <label htmlFor="phoneNumber">Phone Number</label>
                        </div>
                        <div className="inputBox w100">
                            <textarea 
                                name="" required
                                value={this.state.message}
                                onChange={this.handleMessage}
                            ></textarea>
                            <label htmlFor="message">Message</label>
                        </div>

                        <div className={this.state.sent ? 'messageAppear' : 'message'}>
                            Message has been sent.
                        </div>
        
                        <div className="inputBox">
                            <div style={{"float": "left"}}>
                            <button 
                                type="submit"
                            > 
                                Send 
                            </button>
                            </div>
                            <div className={this.state.loading ? 'loader-1' : 'load'}></div>
                        </div>
                    
                    </form>
                </div>
            </div>           

        )
    }
}
