import React from 'react';
import createEvents from './createEvents';

class Events extends React.Component {
    
  state = { input:null };

  handleChange = event => {
    const value = event.target.value;
    this.setState( { input: value});
  }
  handleSubmit = event => {
    event.preventDefault();
    const data = JSON.stringify(this.state);
    fetch('/createEvent', {
      method: 'post',
      body: data
    });
    this.setState({ name: ''} )
  }
  render() {
    return ( 
      <form onSubmit = {this.handleSubmit} >
        <label htmlFor="name"> event title</label>
        <input type="text" id="name" value={this.state.input} onChange= {this.handleChange}/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Events;