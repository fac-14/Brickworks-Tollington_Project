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

          <h1 id="head-h1"></h1>
          <main data-testid="home-page">
            <div id='logo'>
              <img id='logo-img' src={logoImg} alt='Brickworks logo'/>
            </div> 
                <p className='hub-description-four'>Brickworks is a social-action hub rooted in Tollington that actively fosters grass-roots action and supports local people to build the community and create a better society.
            <br/>
            <br/>
            Find out more and get involved!
            </p> 
            {/* <p className='hub-description-three'>Brickworks supports local people to contribute to collective action to build the community and create a better society.</p> */}
            <button className='button-large' style={{padding:'15px 40px'}} onClick={this.addEvent}>Next</button>
          </main>
        </div>
      </div>
    )}
}

export default Home;

