import React from 'react';
import { Link } from "react-router-dom";


const TopTen= () => (
    <div data-testid="topten-page" className='wrapper'>
        <h1>Things To Think About</h1>
        <main>
            <h2>Social Actions takes time, energy and passion. Here's our 10 Top Tips to get you started:</h2>
            <p className='hub-description-two'>
            <br></br>
            1. Identify a problem, challenge or issue in your neighbourhood and be specific
            <br></br>
            2. Do some research so that you have a good picture of the current situation, develop and plan
            <br></br>
            3. Get together with others to explore the situation, share your research and explore solutions
            <br></br>
            4. Build a wider, more diverse community of collaborators who support your aims
            <br></br>
            5. Collaborate with those who might not share your opinions or support your aims so that you can overcome objections and gain different perspectives
            <br></br>
            6. Promote your social action in your community and through the media; create a video
            <br></br>
            7. Take action!
            <br></br>
            8. Evaluate, reflect and record the impact of your action
            <br></br>
            9. Share the impact of your action in creative and imaginative ways to capture attention
            <br></br>
            10. Don't give up, have patience and be committed
            </p>
            <br></br>
            <label htmlFor="all-events">
            <Link to='/contactUs'><h2 className='link'>Click here to register an interest to start a social action</h2></Link>
            </label>
        </main>
    </div>
)

export {TopTen};