import React from 'react';

class Home extends React.Component {
  state= {
    name: null
  }

  //   componentDidMount() {
  //     fetch('/api/test')
  //     .then( (res) => {
  //     this.setState({ name: res} )
  //     }
  //     .catch(err => console.log(err) )
  // }

  
  
  

  render() {
    return( 
      <div>
    <h2> this is home {this.state.name}</h2> 
    </div>
  )
    }
    
  
}


export default Home;

