import React from 'react';
import { Link } from "react-router-dom";


const TopTen= () => (
    <div data-testid="topten-page" className='wrapper'>
        <h1>Top Ten Tips</h1>
        <main>
        <h2>Engaging in social action takes time, energy and passion.  Here are our top 10 tips to get you started</h2>
           <ol>
               <li>
               Identify a problem, challenge or issue in your neighbourhood and be specific about what you want to tackle.
               </li>
               <li>
                Do some research so that you have a good picture of the current situation, then develop and plan how to go about tackling the problem.
                </li>
                <li>
                Get together with others to share your research and explore the problem and potential solutions.
                </li>
                <li>
                Build a wider, more diverse community of collaborators who support your aims.
                </li>
                <li>
                Collaborate with those who might not share your opinions or support your aims so that you can overcome objections and gain different perspectives.           
                </li>
                <li>
                Promote your social action in your community and through the media; create a video and post it on the Brickworks website.
                </li>
                <li>
                Take action!
                </li>
                <li>
                Evaluate, reflect and record the impact of your action on the community.
                </li>
                <li>
                Share the impact of your action in creative and imaginative ways to capture attention.
                </li>
                <li>Don't give up, have patience and be committed.</li>
           </ol>

            <label htmlFor="all-events">
            <Link to='/contactUs'><h5 className='link'>Click here to register an interest to start a social action!</h5></Link>
            </label>
            <p className='hub-description-three'> I am already doing a social action, I want to collaborate with others to build my social action idea</p>
            <label htmlFor="list-event">
            <Link to='/list-event'><h5 className='link'>Click here to register an interest to promote a social action</h5></Link>
            </label>
        
        </main>
    </div>
)

export {TopTen};
