import React from 'react';
import {SingleEvent} from './eventComp';
import getOneEvent from '../utils/utilsgetOneEvent'

class EventDetailed extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      sendData:'rec' + this.props.location.pathname.split('rec')[1],
      recData: []
    }
  }

  componentDidMount () {
  
    const sendData = JSON.stringify(this.state.sendData)
    console.log('data', sendData)
    fetch('/api/queryARecord', {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: sendData,
    })
      .then(res => {
       return res.json()
       
      })
      .then(data => {
        console.log(data);
        this.setState({recData: [data]})
      })
      .catch(err => {
        console.log('ERROR IS', err);
        this.props.history.push('/500error');
      })
     
    }
// if(this.props.data !== {}){
  
// }
  


  render()  {
  
    return (
      <div data-testid="event-detailed" className='wrapper'>
        <h1 data-testid="social-actions-page">{this.props.location.pathname.split('rec')[0].split('/event-detailed/')[1]}</h1>
        <main>
        <div single-event-container>
      <ul className='ul-single-event'>
    {this.state.recData.map( event => (
        <SingleEvent key={event.fields.event_id} {...event.fields} /> 
      ))} 

        </ul>
        </div>
        </main>
      </div>
    )
  }
}


export default EventDetailed;