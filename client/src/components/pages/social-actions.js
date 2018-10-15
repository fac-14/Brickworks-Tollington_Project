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
    this.props.history.push('/topten');
  }
  
  render() {
    const {allEvents} = this.state ;

    return (
      
      <div className='wrapper'>
        <h1 data-testid="all-events">Social Action In Your Community</h1>
      <ul>
      {allEvents.map( event => (
        <EventComp key={event.event_id} {...event} /> 
      )
        
      )}

      </ul>
        
      <button className='add-event-button' onClick={this.addEvent}>Express Interest</button>
      </div>
    )
  }
}

export default SocialActions;
