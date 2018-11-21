import React from 'react';
import { Link } from "react-router-dom";
import logoImg from '../../../public/images/Brickworks-logo-small.png';


const TopTen= () => (
    <div data-testid="topten-page" className='wrapper'>
        <h1 data-testid="topten-page"id="head-h1"><img id='logo-small' src={logoImg} alt='Brickworks logo'/></h1>
        <div className="page-div">
        <h1 className="page-heading">Start a Social Action</h1>
        <h2 className="page-hTwo">Top Ten Tips</h2>
        {/* <main> */}
            
        <h2 className="page-hTwo top-ten-h2">Engaging in social action takes time, energy and passion.
            <br/>
            Here are our top 10 tips to get you started.</h2>
           <ul className='social-action-ul top-ten-tip-ul' >
               <li className="social-action-li">
               Identify a problem, challenge or issue in your neighbourhood and be specific about what you want to tackle.
               </li >
               <li className="social-action-li">
                Do some research so that you have a good picture of the current situation, then develop and plan how to go about tackling the problem.
                </li>
                <li className="social-action-li">
                Get together with others to share your research and explore the problem and potential solutions.
                </li>
                <li className="social-action-li">
                Build a wider, more diverse community of collaborators who support your aims.
                </li>
                <li className="social-action-li">
                Collaborate with those who might not share your opinions or support your aims so that you can overcome objections and gain different perspectives.           
                </li>
                <li className="social-action-li">
                Promote your social action in your community and through the media; create a video and post it on the Brickworks website.
                </li>
                <li className="social-action-li">
                Take action!
                </li>
                <li className="social-action-li">
                Evaluate, reflect and record the impact of your action on the community.
                </li>
                <li className="social-action-li">
                Share the impact of your action in creative and imaginative ways to capture attention.
                </li>
                <li className="social-action-li">Don't give up, have patience and be committed.</li>
           </ul>

        <div>
            <label htmlFor="all-events">
            <Link to='/contactUs'><p className='link'>Click here to register an interest to start a social action!</p></Link>
            </label>
            <p>I am already carrying out a social action, I want to collaborate with others to build it further</p>
            <label htmlFor="list-event">
            <Link to='/list-event'><p className='link'>Click here to register an interest to promote a social action</p></Link>
            </label>
         </div>
        {/* </main> */}
        </div>
    </div>
)

export {TopTen};
