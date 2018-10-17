import React from 'react';
import {EventComp} from './eventComp';
// import { satisfies } from 'semver';


class EventDetailed extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data:{}
    }
  }


// if(this.props.data !== {}){
  
// }
  


  render()  {
  

    return (
      <div data-testid="event-detailed" className='wrapper'>
      <h2> this is a detailed events page </h2>
      
        <h1 data-testid="social-actions-page">Social Action In Your Community</h1>
      <ul>
      {this.props.data.filter(element => {
  const address = this.props.location.pathname.split('/');
  const index = address.length - 1;
  return element.fields.event_name ===address[index]
}).map( event => (
        <EventComp key={event.fields.event_id} {...event.fields} /> 
      )
        
          )}

        </ul>
      </div>
    )
  }
}

export default EventDetailed;