import React from 'react';
import {FormErrors} from './eventComp';


class ListEvent extends React.Component {
    state = { 
      name: '',
      email: '',
      phone: '',
      eventTitle: '',
      description: '',
      date: '',
      time: '',
      venue: '',
      hireSpace: false,
      listEvent: false,
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
  }

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
    this.setState( {formErrors: fieldValidationErrors,
                    nameValid : nameValid,
                    emailValid : emailValid,
                    descriptionValid: descriptionValid
                  }, this.validateForm );
                  
  }


  validateForm() {
    console.log('VALIDATEFORM')
    this.setState( {formValid: this.state.nameValid && this.state.descriptionValid && this.state.emailValid });
    console.log('AFTER this.state.formValid', this.state.formValid)
    console.log('this.state.formErrors', this.state.formErrors);
  
  }

  handleSubmit = event => {
    event.preventDefault();
    const data = JSON.stringify({
      eventProposal: this.state
    })
    console.log('data', data)
    fetch('/api/event-proposal', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: data,
    })
      .then(res => console.log(res))
      .catch(err => {
        console.log('ERROR IS', err);
        this.props.history.push('/500error');
      });

      this.setState({ name: '', email: '', phone: '', description: '', eventTitle: '', date: '', time: '', venue: '', hireSpace: false, listEvent: false, formErrors: {name: '', email: '', description: ''}, nameValid: false, emailValid: false, descriptionValid: false, formValid: false });
  
  }

  render() {
    return ( 
      <div className='wrapper'>
    <h1>Register an interest to collaborate or post a social action</h1>
      <main>
      <p className='options-message'>Please note that Name, Email and Description are required fields</p>
      <form>
      <label className='form-label' htmlFor="name">Name  <span className='red-asterisk'>*</span></label>
        <input type="text" id="name" name="name" value={this.state.name} onChange= {this.handleChange}/>
        <label className='form-label' htmlFor="email">Email  <span className='red-asterisk'>*</span></label>
        <input type="text" id="email" name="email" value={this.state.email} onChange= {this.handleChange}/>
        <label className='form-label' htmlFor="phone">Telephone number</label>
        <input type="text" id="phone" name="phone" value={this.state.phone} onChange= {this.handleChange}/>
        <label className='form-label' htmlFor="eventTitle">
        Title of social action</label>
        <input type="text" id="eventTitle" name="eventTitle" value={this.state.eventTitle} onChange= {this.handleChange}/>
        {/* <label htmlFor="description">Event Details</label>
        <input type="text" id="description" name="description" value={this.state.description} onChange= {this.handleChange}/> */}
        <label className='form-label' htmlFor="description">Description of social action   <span className='red-asterisk'>*</span></label>
        <textarea name="description" id="description" cols="40" rows="10" value={this.state.description} onChange={this.handleChange}></textarea>

        <label className='form-label' htmlFor="date">Date</label>
        <input type="text" id="date" name="date" value={this.state.date} onChange= {this.handleChange}/>
        <label className='form-label' htmlFor="time">Time</label>
        <input type="text" id="time" name="time" value={this.state.time} onChange= {this.handleChange}/>
        <label className='form-label' htmlFor="venue">Venue</label>
        <input type="text" id="venue" name="venue" value={this.state.venue} onChange= {this.handleChange}/>

        <p className='options-message'>Please check the options applicable to you</p>

        <div className="choices">
          <span className="choices-text">I would like to list this event</span>
        <label className='form-label' htmlFor="hireSpace">
        <input className='checkbox'
          type="checkbox"
          id="hireSpace"
          name="hireSpace"
          checked={this.state.hireSpace}
          onChange={this.handleChange}
        />
        </label></div>

        <div className="choices">
          <span className="choices-text">I would like to list this event</span>
        <label htmlFor="listEvent">
        <input className='checkbox'
          type="checkbox"
          id="listEvent"
          name="listEvent"
          checked={this.state.listEvent}
          onChange={this.handleChange}
        />
        </label></div>

        <button className="button-large" type="submit" onClick={this.handleSubmit} disabled= { !this.state.formValid} >Submit</button>
      </form>
      </main>

      <div>
      <FormErrors formErrors={this.state.formErrors} />
    </div>

      </div>
    )
  }
}

export default ListEvent;