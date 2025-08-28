import React, { Component } from 'react';
import axios from 'axios';
import "./Contact.css";

export default class Form extends Component {


state={
    name:'',
    email:'',
    message:'',
    sent:false,
    phoneNumber: '',
    loading: false
}



// handle inputs 

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
        

            <section className="contact">
            <div className='content'>
                <h2>Contact Us</h2>
                <p></p>
            </div>
            <div className="container-div">
            <div className="contactinfo">
                <div className='box'>
                    <div className='icon'>
                        <a href='https://goo.gl/maps/FGb8HnYLp2d9U8aa7' target='blank'><i class="fas fa-map-marker-alt "></i></a>
                    </div>
                    <div className='text'>
                        <h3>Address</h3>
                        <p>
                            Shop No. 32, <br/>
                            Chinese Dragon Bldg.,<br/>
                            Deira, Dubai, UAE
                        </p>
                    </div>
                    <div className='icon'>
                    <a href='tel:00971503175968'><i class="fas fa-phone-alt"></i></a>
                    </div>
                    <div className='text'>
                        <h3>Phone</h3>
                        <p>
                            +971 4 224 5756 <br/>
                            +971 52 363 5864
                        </p>
                    </div>
                    <div className='icon'>
                        <i class="fas fa-envelope-open-text"></i>
                    </div>
                    <div className='text'>
                        <h3>Email</h3>
                        <p>
                            contact@blackbulltyres.com <br/>
                            varasheed783@gmail.com
                        </p>
                    </div>
                    <div className='icon'>
                        <i class="fas fa-fax"></i>
                    </div>
                    <div className='text'>
                        <h3>Fax</h3>
                        <p>
                            +971 4 224 2269
                        </p>
                    </div>
                </div>
            </div>

            <div className="contactForm">
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
                    <div className={this.state.sent ? 'msgAppear' : 'msg'}>
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
                        <div className={this.state.loading ? 'loader' : 'load'}></div>
                    </div>
                
                    
                </form>
        
            </div>

            </div>
            </section>

        )
    }
}
