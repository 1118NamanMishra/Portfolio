
import React, { Component } from 'react';
import './contact.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      phoneNumber: '',
      email: '',
      message: '',
      errors: {},
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { fullName, phoneNumber, email, message } = this.state;
  
    if (!fullName || !phoneNumber || !email || !message) {
      const errors = {
        fullName: !fullName,
        phoneNumber: !phoneNumber,
        email: !email,
        message: !message,
      };
      this.setState({ errors });
    } else {
      await new Promise(resolve => setTimeout(resolve, 100));
      window.location.reload(true);
    }
  };
  

  render() {
    const { fullName, phoneNumber, email, message, errors } = this.state;

    return (
      <section className='contactme'>
        <h2>Contact Me</h2>
        <div className='contact'>
          <form onSubmit={this.handleSubmit}>
            <div className='name'>
              <label htmlFor="fullName" className='cname'>Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                required
                value={fullName}
                onChange={this.handleInputChange}
              />
              {errors.fullName && <span className="error">Full name is required</span>}
            </div>
            <div className='phone'>
              <label htmlFor="phoneNumber" className='cname'>Phone</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={this.handleInputChange}
              />
              {errors.phoneNumber && <span className="error">Phone number is required</span>}
            </div>
            <div className='emailmsg'>
              <label htmlFor="email" className='cname'>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                value={email}
                onChange={this.handleInputChange}
              />
              {errors.email && <span className="error">Email is required</span>}
            </div>
            <div className='msg'>
              <label htmlFor="message" className='cname'>Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                value={message}
                onChange={this.handleInputChange}
              />
              {errors.message && <span className="error">Message is required</span>}
            </div>
            <div>
              <button type="submit" className='button'>Submit</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default ContactForm;