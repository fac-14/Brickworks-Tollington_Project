import React from 'react';
 
const Resources = () => (
    <div className='wrapper'>
        <h1 data-testid="resources-page">Resources</h1> 
            <main>
                <h2>Social Actions takes time, energy and passion. Here's our 10 Top Tips to get you started:</h2>
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
                <h4>Helpful links for further information</h4>
                {/* <div className='resource-links'> */}
                    <a className='resource-link' href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/591797/A_description_of_social_action.pdf">A description of social action</a>
                    <br></br>
                    <a className='resource-link' href='https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/591799/Leadership_and_culture_change_to_enable_social_action.pdf'>Leadership and culture change</a>
                    <br></br>
                    <a className='resource-link' href='https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/591805/Enabling_social_action_methodology.pdf'>Methodology</a>
                {/* </div> */}
            </div>
            </main>
    </div>

)

export {Resources};