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
    formErrors: {name:'', email: '', description: ''},
    nameValid: false,
    emailValid: false,
    descriptionValid: false,
    formValid: false
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value }, () => {this.validateField(target.name, value)});
 
  };
  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let descriptionValid = this.state.descriptionValid;
console.log('BEFORE SWITCH', this.state.nameValid);
    switch(fieldName) {
      case 'name':
      nameValid = (value.length >=2 ) 
      fieldValidationErrors.name = nameValid ? '' : ' is too short' ;
      break;
      case 'email':
      //negated emailValid twice as (value.match(..)) gives null or some other value, we need to turn that to boolean, true or false for readability
      emailValid = !(!(value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ) );
      fieldValidationErrors.email = emailValid ? '' : ' is invalid';
      break;
      
      case 'description':
      // descriptionValid = (value != '');
      descriptionValid = (value.length >= 5);
      fieldValidationErrors.description = descriptionValid ? '' : ' is too short' ;
      break;

      default:
      break;
    }
    console.log('NAME', name);
    // console.log('AFTER SWITCH NAMEVALID', nameValid);
    // console.log('AFTER SWITCH EMAILVALID', emailValid);
    // console.log('AFTER SWITCH DESCRIPTIONVALID', descriptionValid);
    this.setState( {formErrors: fieldValidationErrors,
                    nameValid : nameValid,
                    emailValid : emailValid,
                    descriptionValid: descriptionValid
                  }, this.validateForm );
                  
    // console.log('BEFORE this.state.formValid', this.state.formValid)

  }

  validateForm() {
    console.log('VALIDATEFORM')
    this.setState( {formValid: this.state.nameValid && this.state.descriptionValid && this.state.emailValid });
    // console.log('this.state.nameValid', this.state.nameValid);
    // console.log('this.state.emailValid', this.state.emailValid);

    // console.log('this.state.descriptionValid', this.state.descriptionValid);
    console.log('AFTER this.state.formValid', this.state.formValid)
    console.log('this.state.formErrors', this.state.formErrors);
  
  }

  handleSubmit = (event) => {
    event.preventDefault();
   
    
    const data = JSON.stringify({
      startSocialAction: this.state.form
    });
   
   
    fetch('/api/contactUs', {
      method: 'POST',
      headers: {
        
        "Content-Type": 'application/json'   
      },
      body: data,
    })
      .then(res => console.log(res))
      .catch(err => {
        console.log('ERROR IS', err);
        this.props.history.push('/500error');
      });
    this.setState({ name: '', email: '', phone: '', description: '', cntWithCommunityAdviser: false,
    trainCommunityAdviser: false, formErrors: {name:'', email: '', description: ''}, nameValid: false,emailValid: false, descriptionValid: false, formValid: false });
    
  }

  render() {
    return (
    <div className='wrapper'>
    <h1>Contact Us</h1>
    <main>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
        <label htmlFor="phone">Contact Number:</label>
        <input type="text" id="phone" name="phone" value={this.state.phone} onChange={this.handleChange} />
        <label htmlFor="description">Description Of Social Action:</label>
        <textarea name="description" id="description" cols="40" rows="10" value={this.state.description} onChange={this.handleChange}></textarea>
        {/* <input type="text" id="description" name="description" value={this.state.description} onChange={this.handleChange} /> */}
        <h4>Please check the options applicable to you</h4>
        <div className='checkbox-div'>
        <input className='checkbox'
          type="checkbox"
          id="cntWithCommunityAdviser"
          name="cntWithCommunityAdviser"
          checked={this.state.cntWithCommunityAdviser}
          onChange={this.handleChange}
        />
        <label htmlFor="cntWithCommunityAdviser">I want to connect with a local Community Organiser</label>

        <input className='checkbox'
          type="checkbox"
          id="trainCommunityAdviser"
          name="trainCommunityAdviser"
          checked={this.state.trainCommunityAdviser}
          onChange={this.handleChange}
        />
        <label htmlFor="trainCommunityAdviser">I am interested in Community Organisers training</label>
        </div>
        <button className='button-large' type="submit" disabled= { !this.state.formValid}>Submit</button>
        
      </form>
    </main>

    <div>
      <FormErrors formErrors={this.state.formErrors} />
    </div>

    </div>
    
    );
  }
}

export default ContactUs;