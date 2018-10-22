import React from 'react';
import logoImg from '../../../public/images/Brickworks-logo1.png'; 

class Home extends React.Component {
  
  constructor(props){
  super(props)
  this.state= {
    name: null
  }
  }
  
  addEvent = () => {
    this.props.history.push('/social-actions');
  }
 

  render() {
    return( 
      <div>
        
        <div className='wrapper'>
          <h1>Brickworks - Home</h1>
          <div id='sidebar'></div>
          <main>
            <div id='logo'>
              <img id='logo-img' src={logoImg} alt='Brickworks logo'/>
            </div> 
            <div id='hub-description'>
            <p>Brickworks is a social-action hub rooted in Tollington that actively fosters grass-roots action. Brickworks supports local people to contribute to collective action, build the community and create a better, more democratic society.
            </p>        
            <p>Click 'Next' to find out more and get involved!
            </p>
            </div>
            <button className='button-large' onClick={this.addEvent}>Next</button>
          </main>
        
        </div>
      </div>
  )}
}

export default Home;