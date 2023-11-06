import React, { Component } from 'react';
import './contact.css'

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
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

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, phoneNumber, email, message } = this.state;

    // Check if all mandatory fields are filled
    if (!firstName || !lastName || !phoneNumber || !email || !message) {
      const errors = {
        firstName: !firstName,
        lastName: !lastName,
        phoneNumber: !phoneNumber,
        email: !email,
        message: !message,
      };
      this.setState({ errors });
    } else {
      // All fields are filled, you can submit the form here
      console.log('Form submitted:', this.state);
      // Add your submission logic here
    }
  };

  render() {
    const { firstName, lastName, phoneNumber, email, message, errors } = this.state;

    return (
        <section className='contactme'>
             <h2>Contact Me</h2>
      <div className='contact'>
       
        <form onSubmit={this.handleSubmit}>
            <div className='name'>
          <div className='bothname'>
            <label htmlFor="firstName" className='cname' >First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={firstName}
              onChange={this.handleInputChange}
              
            />
            {errors.firstName && <span className="error">First name is required</span>}
          </div>
          <div className='bothname'>
            <label htmlFor="lastName" className='cname'>Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={this.handleInputChange}
            
            />
            {errors.lastName && <span className="error">Last name is required</span>}
          </div>
          </div>
          <div className='phone' >
            <label htmlFor="phoneNumber" className='cname'>Phone</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
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