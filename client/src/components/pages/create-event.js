import React from 'react';
class CreateEvent extends React.Component {
    constructor(props) {
      super(props),
      this.state = { 
      eventTitle: '',
      eventCategory: '',
      date: '',
      time: '',
      venue: '',
      contact: '',
      eventDetails: ''
      }
     };

  handleChange = event => {
    let newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }
  handleSubmit = event => {
    console.log(this.state);
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
    var string = JSON.stringify(this.state);
    xhr.send(string);
    this.props.history.push('/all-events');
  }

  render() {
    return ( 
      <form>
        <label htmlFor="eventTitle">Event Title</label>
        <input type="text" id="eventTitle" value={this.state.name} onChange= {this.handleChange}/>
        <label htmlFor="eventCategory">Event Category</label>
        <input type="text" id="eventCategory" value={this.state.name} onChange= {this.handleChange}/>
        <label htmlFor="date">Date</label>
        <input type="text" id="date" value={this.state.name} onChange= {this.handleChange}/>
        <label htmlFor="time">Time</label>
        <input type="text" id="time" value={this.state.name} onChange= {this.handleChange}/>
        <label htmlFor="venue">Venue</label>
        <input type="text" id="venue" value={this.state.name} onChange= {this.handleChange}/>
        <label htmlFor="contact">Contact Details</label>
        <input type="text" id="contact" value={this.state.name} onChange= {this.handleChange}/>
        <label htmlFor="eventDetails">Event Details</label>
        <input type="text" id="eventDetails" value={this.state.name} onChange= {this.handleChange}/>
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default CreateEvent;