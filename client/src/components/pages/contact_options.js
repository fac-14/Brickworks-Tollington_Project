import React from 'react';
import ContactUs from './contactUs';
import ListEvent from './list-event';

class ContactOptions extends React.Component {
  state = {
    radioSelected: '',
  }
  handleChange = event => {
    console.log('here');
    console.log('radioSelected', radioSelected);
    const value = event.target.value;
    this.setState({radioSelected:value});
    console.log('radioSelected', radioSelected);
  }
  goNext = () => {
    // if(this.radioSelected === 'register-interest')
    // {
    //   return <ContactUs/>
    // }
    // else if(this.radioSelected === 'collaborate')
    // {
    //   return <ListEvent />
    // }
    // this.setState({radioSelected: ''});
  }
  render() {

    return (
      <div className='wrapper'>
       <h1 data-testid="social-actions-page"id="head-h1">Logo</h1>
      <div className="page-div">
      <h1>this is contact options</h1>
      <input type="radio" id="register-interest" name="register-interest"
      value="register-interest" checked={this.state.radioSelected === 'register-interest'}
      onChange={this.handleChange} />
      <label htmlFor="register-interest">I would like to register an interest </label>
      <input type="radio" id="collaborate" name="collaborate"
      value="collaborate" checked={this.state.radioSelected === "collborate"}
      onChange={this.handleChange} />
      <label htmlFor="collaborate">I would like to collaborate with others</label>
      <button onclick={this.goNext}>next</button>
      </div>
      </div>
    )
  }
}
  

export default ContactOptions;