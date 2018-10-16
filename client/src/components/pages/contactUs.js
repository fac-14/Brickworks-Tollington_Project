import React from 'react';
import {FormErrors} from './eventComp';

class ContactUs extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
    description: '',
    cntWithCommunityAdviser: false,
    trainCommunityAdviser: false,
    formErrors: {name: '', email: '', description: '' },
    nameValid: false,
    emailValid: false,
    descriptionValid: false,
    formValid: false
  }
  handleChange = event => {
    // this.setState({ [event.target.name]: event.target.value });
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value });
 
  };
  validateField = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let descriptionValid = this.state.descriptionValid;

    switch(fieldName) {
      case 'name':
      nameValid = (value != '') //value is not ''
      break;
      case 'email':
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.email = emailValid ? '' : ' is invalid';
      break;
      case 'description':
      descriptionValid = (value != '');
      break;

    }
    this.setState( {formErrors: fieldValidationErrors,
                    nameValid : nameValid,
                    emailValid: emailValid,
                    descriptionValid: descriptionValid
                  }, this.validateForm );
  }

  validateForm() {
    this.setState( {formValid: this.state.nameValid && this.state.emailValid && this.state.descriptionValid});
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('CONTACT US MA')
    console.log(this.state)
    const data = JSON.stringify({
      startSocialAction: this.state
    });
    console.log('data', data)
    fetch('/api/contactUs', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: data,
    })
      .then(res => console.log(res))
      .catch(err => {
        console.log('ERROR IS', err);
        throw new Error(`fetch /api/contactUs failed ${err}`);
      });
    this.setState({ name: '', email: '', description: '', number: '' });
  }

  render() {
    return (
    <div className='wrapper'>
    <h1>Register an interest to a social action</h1>
    <main>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} onBlur={this.validateField}/>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
        <label htmlFor="phone">Contact number:</label>
        <input type="text" id="phone" name="phone" value={this.state.phone} onChange={this.handleChange} />
        <label htmlFor="description">Description of social action:</label>
        <textarea name="description" cols="40" rows="10" value={this.state.description} onChange={this.handleChange}></textarea>
        {/* <input type="text" id="description" name="description" value={this.state.description} onChange={this.handleChange} /> */}
        <h3>please check the options applicable to you</h3>
        <label htmlFor="cntWithCommunityAdviser">I want to connect with a local Community Organiser</label>
        <input
          type="checkbox"
          id="cntWithCommunityAdviser"
          name="cntWithCommunityAdviser"
          checked={this.state.cntWithCommunityAdviser}
          onChange={this.handleChange}
        />

        <label htmlFor="trainCommunityAdviser">I am interested in Community Organisers training</label>
        <input
          type="checkbox"
          id="trainCommunityAdviser"
          name="trainCommunityAdviser"
          checked={this.state.trainCommunityAdviser}
          onChange={this.handleChange}
        />



        <button type="submit" disabled= { !this.state.formValid}>Submit</button>
      </form>
    </main>

    {/* <div>
      <FormErrors formErrors = {this.state.formErrors} />
    </div> */}

    </div>

    
    );
  }
}

export default ContactUs;