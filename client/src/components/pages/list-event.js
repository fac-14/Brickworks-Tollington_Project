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

  handleSubmit = event => {
    event.preventDefault();
    console.log('CONTACT US MA')
    console.log(this.state)
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
    
  }

  render() {
    return ( 
      <div className='wrapper'>
    <h1>Register an interest to collaborate or post a social action</h1>
    <h3> Please note name, email and Description are required fields </h3>
    <main>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={this.state.name} onChange= {this.handleChange}/>
        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" name="email" value={this.state.email} onChange= {this.handleChange}/>
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" name="phone" value={this.state.phone} onChange= {this.handleChange}/>
        <label htmlFor="eventTitle">Social action title </label>
        <input type="text" id="eventTitle" name="eventTitle" value={this.state.eventTitle} onChange= {this.handleChange}/>
        {/* <label htmlFor="description">Event Details</label>
        <input type="text" id="description" name="description" value={this.state.description} onChange= {this.handleChange}/> */}
        <textarea name="description" id="description" cols="40" rows="10" value={this.state.description} onChange={this.handleChange}>Description of social action</textarea>

        <label htmlFor="date">Date</label>
        <input type="text" id="date" name="date" value={this.state.date} onChange= {this.handleChange}/>
        <label htmlFor="time">Time</label>
        <input type="text" id="time" name="time" value={this.state.time} onChange= {this.handleChange}/>
        <label htmlFor="venue">Venue</label>
        <input type="text" id="venue" name="venue" value={this.state.venue} onChange= {this.handleChange}/>

        <h3>Please check the options applicable to you</h3>
        <label htmlFor="hireSpace">I want to hire a meeting space</label>
        <input className='checkbox'
          type="checkbox"
          id="hireSpace"
          name="hireSpace"
          checked={this.state.hireSpace}
          onChange={this.handleChange}
        />

        <label htmlFor="listEvent">I am interested to list this event </label>
        <input className='checkbox'
          type="checkbox"
          id="listEvent"
          name="listEvent"
          checked={this.state.listEvent}
          onChange={this.handleChange}
        />
        
        <button type="submit" onClick={this.handleSubmit} disabled= { !this.state.formValid} >Submit</button>
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