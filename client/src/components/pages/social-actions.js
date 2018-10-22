import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import getAllEvents from '../utils/utilsgetAllEvent';
import getPastEvents from '../utils/utilsgetPastEvent';
import {EventComp, UpcomingEvents, PastEvents} from './eventComp';

class SocialActions extends React.Component {
  
  
state = {
  allEvents : [],
  pastEvents : [],
  allEvntLoading : true,
  pastEvntLoading: true,
}

  componentDidMount() {
    
    getAllEvents()
    .then(response => {
      //set allEvents state
      this.setState( { allEvents: response, allEvntLoading: false});
      //pass data to parent
      this.props.extractData(this.state.allEvents);
    })
    
    .catch(err => console.log(err));

    getPastEvents()
    .then(response => {
   
    this.setState( { pastEvents : response, pastEvntLoading:false});
    this.props.extractData(this.state.pastEvents);
    
  })

  .catch(err => console.log(err));
  }
  
  addEvent = () => {
    this.props.history.push('/topten');
  }
  
  render() {
    if (this.state.allEvntLoading || this.state.pastEvntLoading) {
      return (
        <div className='wrapper'>
        <h1 data-testid="social-actions-page">Social Actions</h1>
        <main>
        <h3>loading...</h3>
        </main>
        </div>
      )
      
    } 
   
    const {allEvents} = this.state;
    const {pastEvents} = this.state;

    return (
      
    <div className='wrapper'>
        <h1 data-testid="social-actions-page">Social Actions</h1>
        <div id='sidebar'></div>    
      
      <main>
        <div className='flush-left'>
        <UpcomingEvents allEvents={this.state.allEvents} />
        <PastEvents pastEvents={this.state.pastEvents}/>  
        </div>  
        <br></br>
        <br></br>         
      <button className='button-large' onClick={this.addEvent}>I'm interested!</button>
      </main>
    </div>
    )
  }
  }
  


export default SocialActions;