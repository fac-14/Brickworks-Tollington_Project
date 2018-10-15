import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import getAllEvents from '../utils/utilsgetAllEvent';
import {EventComp} from './eventComp';

class SocialActions extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      allEvents : [],
    }
  }

  componentDidMount() {
    //make api request and get all events
    getAllEvents()
    .then(response => {
      console.log('I M HERE');
      console.log(response)
      this.setState( { allEvents: response});
console.log('this.state.allEvents', this.state.allEvents);
    })
    .catch(err => console.log(err));
  }
  addEvent = () => {
    this.props.history.push('/create-event');
  }
  
  render() {
    const {allEvents} = this.state ;

    return (
      
      <div data-testid="social-actions-page">
        <h2>Social Actions</h2>
        <ul>
          {allEvents.map( event => (
            <EventComp key={event.event_id} {...event} /> 
          )
        
          )}

        </ul>
        
        <button onClick={this.addEvent}>Add Event</button>
      </div>
    )
  }
}

export default SocialActions;
