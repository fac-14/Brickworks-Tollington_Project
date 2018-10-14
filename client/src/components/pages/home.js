import React from 'react';

class Home extends React.Component {
  state= {
    name: null
  }  

  render() {
    return( 
      <div>
        <h2 data-testid="home-page">Home</h2> 
      </div>
  )}
}

export default Home;

