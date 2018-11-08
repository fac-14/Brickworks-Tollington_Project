import React from 'react';

import BikeImg from '../../../public/images/bike.jpg';
import logoImg from '../../../public/images/Brickworks-logo-small.png';



const Projects = () => 
// return(    
    <div className='wrapper'>
    <h1 id="head-h1"><img id='logo-small' src={logoImg} alt='Brickworks logo'/></h1>


    <h1 data-testid="projects-page" id="centre-align">Projects</h1>
    <main>

        {/* {if(process.env.NODE_ENV!== 'test') && */}
         
                <img id='bike-img' src={BikeImg} alt='bike photo'></img>
        <p className='hub-description-two'>Brickworks Social Action Hub is making a difference to the lives of local young people by helping them learn new skills and build relationships with local police through bicycle maintenance sessions. Local young people aged 12-16 years old are encouraged and supported to come to Brickworks for six sessions and during the two hours that they are with us they learn how to repair punctures, replace broken cables and align gears and brake pads. The bicycles are donated by the local police and the young people get to keep the bike on successful completion of the course.</p>
    </main>
    
    </div>
    // )

export {Projects};