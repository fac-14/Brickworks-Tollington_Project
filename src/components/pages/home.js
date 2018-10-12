import React from 'react';

class Home extends React.Component {
  state= {
    name: null
  }  

  render() {
    return( 
      <div data-testid="home-page">
        <h2>Home</h2> 
      </div>
  )}
}

export default Home;

