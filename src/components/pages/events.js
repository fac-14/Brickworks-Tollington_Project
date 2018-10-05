import React from 'react';
import createEvents from './createEvents';

class Events extends React.Component {
    
  state = { 
    name: ''
};

  handleChange = event => {
    const value = event.target.value;
    this.setState( { name: value});
    console.log(this.state.name)
  }
  handleSubmit = event => {
    
    
    const data = JSON.stringify(this.state.name);
    
    
    fetch('/api/create-event', {
      
      method: 'post',
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: data
    });
    this.setState({ name: ''})
    event.preventDefault();
    
    
  }
  render() {
    return ( 
      <form>
        <label htmlFor="name"> event title</label>
        <input type="text" id="name" value={this.state.name} onChange= {this.handleChange}/>
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default Events;