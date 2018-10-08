import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class AllEvents extends React.Component {
  constructor(props){
    super(props)
  }
  addEvent = () => {
    this.props.history.push('/create-event');
  }
  render() {
    return ( 
      <div>
        <button onClick={this.addEvent}>Add Event</button>
      </div>
    )
  }
}

export default AllEvents;
