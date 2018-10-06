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
    event.preventDefault()
    console.log(this.state.name)

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/api/create-event", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if(xhr.readyState=== 4 && xhr.status === 200){
      console.log(this.responseText)
    }
  }
   
    
    xhr.send(this.state.name);
  
  }

  
  render() {
    return ( 
      <div>
        <label htmlFor="name"> event title</label>
        <input type="text" id="name" value={this.state.name} onChange= {this.handleChange}/>
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default Events;