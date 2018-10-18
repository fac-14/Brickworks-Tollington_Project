import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import getAllEvents from '../utils/utilsgetAllEvent';
import getPastEvents from '../utils/utilsgetPastEvent';
import {EventComp} from './eventComp';

class SocialActions extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      allEvents : [],
      pastEvents : [],
    }
  }


  componentDidMount() {
    
    getAllEvents()
    .then(response => {
      //set allEvents state
      this.setState( { allEvents: response});
      //pass data to parent
     
    })
    
    .catch(err => console.log(err));

    getPastEvents()
    .then(response => {
   
    this.setState( { pastEvents : response});
    
    
  })

  .catch(err => console.log(err));
  }
  
  addEvent = () => {
    this.props.history.push('/topten');
  }
  
  render() {
    const {allEvents} = this.state;
    const {pastEvents} = this.state;

    return (
      
      <div className='wrapper'>
        <h1 data-testid="social-actions-page">Social Actions</h1>
      
      <h2>Current Events</h2>

      {allEvents.map( event => (
        <EventComp key={event.fields.event_id} {...event.fields} /> 
      ))}

      
      <h2>Past Events</h2>

      {pastEvents.map( event => (
        <EventComp key={event.fields.event_id} {...event.fields} /> 
      ))}
    <br></br>
    <br></br>         
    <button className='button-large' onClick={this.addEvent}>Express Interest</button>
    </div>
    )
  }
}

export default SocialActions;
