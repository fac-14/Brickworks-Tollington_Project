import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import getAllEvents from '../utils/utilsgetAllEvent';
import {EventComp} from './eventComp';

class AllEvents extends React.Component {
  
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
{/* <Btn
                  zombiesAlive={this.state.zombiesAlive}
                  increment={this.increment}
                  decrement={this.decrement}
                  firstZombieAppeared={this.setFirstZombieAppeared}
                />
                <Btn
                    // React uses the 'key' property to give things stability: https://reactjs.org/docs/lists-and-keys.html
                    key={`button-${index}`}
                    zombiesAlive={this.state.zombiesAlive}
                    increment={this.increment}
                    decrement={this.decrement}
                    firstZombieAppeared={this.setFirstZombieAppeared}
                /> */}

    return (
      
      <div>
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

export default AllEvents;
