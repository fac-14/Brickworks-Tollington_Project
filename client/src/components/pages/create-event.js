import React from 'react';
class CreateEvent extends React.Component {
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
      }

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value });
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
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={this.state.name} onChange= {this.handleChange}/>
        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" name="email" value={this.state.email} onChange= {this.handleChange}/>
        <label htmlFor="phone">phone</label>
        <input type="text" id="phone" name="phone" value={this.state.phone} onChange= {this.handleChange}/>
        <label htmlFor="eventTitle">Event Title</label>
        <input type="text" id="eventTitle" name="eventTitle" value={this.state.eventTitle} onChange= {this.handleChange}/>
        {/* <label htmlFor="description">Event Details</label>
        <input type="text" id="description" name="description" value={this.state.description} onChange= {this.handleChange}/> */}
        <textarea name="description" id="description" cols="40" rows="10" value={this.state.description} onChange={this.handleChange}></textarea>

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
        
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default CreateEvent;