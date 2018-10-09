import React from 'react';

class Home extends React.Component {
  state= {
    name: null
  }  

  render() {
    return( 
      <div>
        <h2> this is home {this.state.name} </h2> 
      </div>
  )}
}

export default Home;

