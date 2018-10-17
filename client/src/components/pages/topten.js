import React from 'react';
import { Link } from "react-router-dom";


const TopTen= () => (
    <div data-testid="topten-page" className='wrapper'>
        <h1>Things To Think About</h1>
        <main>
            <h2>Social actions takes time, energy and passion. Here's our 10 top tips to get you started:</h2>
            <div className='hub-description-two'>
            <p>
            1. Identify a problem, challenge or issue in your neighbourhood and be specific
            </p>
            <hr></hr>
            <p>
            2. Do some research so that you have a good picture of the current situation, develop and plan
            </p>
            <hr></hr>
            <p>
            3. Get together with others to explore the situation, share your research and explore solutions
            </p>
            <hr></hr>
            <p>
            4. Build a wider, more diverse community of collaborators who support your aims
            </p>
            <hr></hr>
            <p>
            5. Collaborate with those who might not share your opinions or support your aims so that you can overcome objections and gain different perspectives
            </p>
            <hr></hr>
            <p>
            6. Promote your social action in your community and through the media; create a video
            </p>
            <hr></hr>
            <p>
            7. Take action!
            </p>
            <hr></hr>
            <p>
            8. Evaluate, reflect and record the impact of your action
            </p>
            <hr></hr>
            <p>
            9. Share the impact of your action in creative and imaginative ways to capture attention
            </p>
            <hr></hr>
            <p>
            10. Don't give up, have patience and be committed
            </p>
            <label htmlFor="all-events">
            <Link to='/contactUs'><h5 className='link'>Click here to register an interest to start a social action!</h5></Link>
            </label>
            <p className='hub-description-three'> I am already doing a social action, I want to collaborate with others to build my social action idea</p>
            <label htmlFor="list-event">
            <Link to='/list-event'><h5 className='link'>Click here to register an interest to promote a social action</h5></Link>
            </label>
            </div>



        </main>
    </div>
)

export {TopTen};
