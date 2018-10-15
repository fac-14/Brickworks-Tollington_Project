import React from 'react';
import logoImg from '../../../public/images/Brickworks-logo1.png'; 

class Home extends React.Component {
  state= {
    name: null
  }  

  render() {
    return( 
      <div>
        <div className='wrapper'>
          <h1 data-testid="home-page"></h1>
          <main>
            <div id='logo'>
              <img id='logo-img' src={logoImg} alt='Brickworks logo'/>
            </div> 
            <p className='hub-description'>Brickworks is a social-action hub rooted in Tollington that actively fosters grass-roots action. Brickworks supports local people to contribute to collective action, build the community and create a better, more democratic society.
            <br/>
            Find out more and get involved!
            </p>
            <button className='button-large'>Next</button>
          </main>
        </div>
        {/* <h2> this is home {this.state.name} </h2>  */}
      </div>
  )}
}

export default Home;

