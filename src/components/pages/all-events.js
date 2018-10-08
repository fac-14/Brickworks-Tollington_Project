import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class AllEvents extends React.Component {

  render() {
    return ( 
      <div>
        <Link to='/create-event'>Add an Event</Link>
      </div>
    )
  }
}

export default AllEvents;
