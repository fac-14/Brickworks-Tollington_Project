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
    //make api request and get all events
    getAllEvents()
    .then(response => {
      console.log('I M HERE');
      console.log(response)
      this.setState( { allEvents: response});
console.log('this.state.allEvents', this.state.allEvents);
    })
    .catch(err => console.log(err));

    getPastEvents()
    .then(response => {
    console.log('PAST EVENTS');
    console.log(response);
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
        <h1 data-testid="social-actions-page">Social Action In Your Community</h1>
      <ul>
      {allEvents.map( event => (
        <EventComp key={event.fields.event_id} {...event.fields} /> 
      )
        
          )}

        </ul>

        {/* populate pastEvents if there are entries in past events*/}
       
  {/* if (pastEvents !== undefined || pastEvents.length != 0)
        {
          return ( */}
            <ul>
          <h3>past events</h3>
        {pastEvents.map( event => (
          <EventComp key={event.fields.event_id} {...event.fields} /> 
        )
        
          )}

        </ul>
          {/* ) */}
        
        }
        
      <button className='add-event-button' onClick={this.addEvent}>Express Interest</button>
      </div>
    )
  }
}

export default SocialActions;
