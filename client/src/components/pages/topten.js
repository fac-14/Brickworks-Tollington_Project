import React from 'react';
import { Link } from "react-router-dom";


const TopTen= () => (
    <div data-testid="topten-page" className='wrapper'>
        <h1>Things To Think About</h1>
        <main>
            <h2>Social actions takes time, energy and passion. Here's our 10 top tips to get you started:</h2>
            <p className='hub-description-two'>
            1. Identify a problem, challenge or issue in your neighbourhood and be specific
            <br></br>
            {/* <hr></hr> */}
            2. Do some research so that you have a good picture of the current situation, develop and plan
            <br></br>
            {/* <hr></hr> */}
            3. Get together with others to explore the situation, share your research and explore solutions
            <br></br>
            {/* <hr></hr> */}
            4. Build a wider, more diverse community of collaborators who support your aims
            <br></br>
            {/* <hr></hr> */}
            5. Collaborate with those who might not share your opinions or support your aims so that you can overcome objections and gain different perspectives
            <br></br>
            {/* <hr></hr> */}
            6. Promote your social action in your community and through the media; create a video
            <br></br>
            {/* <hr></hr> */}
            7. Take action!
            <br></br>
            {/* <hr></hr> */}
            8. Evaluate, reflect and record the impact of your action
            <br></br>
            {/* <hr></hr> */}
            9. Share the impact of your action in creative and imaginative ways to capture attention
            <br></br>
            {/* <hr></hr> */}
            10. Don't give up, have patience and be committed
            </p>
            <label htmlFor="all-events">
            <Link to='/contactUs'><h3 className='link'>Click here to register an interest to start a social action!</h3></Link>
            </label>
            <p> I am already doing a social action, I want to collaborate with others to build my social action idea</p>
            <label htmlFor="list-event">
            <Link to='/list-event'><h3 className='link'>Click here to register an interest to promote a social action</h3></Link>
            </label>



        </main>
    </div>
)

export {TopTen};
