import React from 'react';
import logoImg from '../../../public/images/Brickworks-logo-small.png';


class Faq extends React.Component {
    render() {
        return(
    <div>
        <div data-testid = "faq-page" className='wrapper'>
        <h1 id="head-h1"><img id='logo-small' src={logoImg} alt='Brickworks logo'/></h1>
        <h1 className='pageHeadings' id="centre-align">FAQs</h1>
        <main>
            <ul id="none-li-style">
                    <li><p className='li-p-strong'>&#8226; &ensp; How does Brickworks connect me with others who can help me develop my idea for a social action?</p>
                <span className='li-content'>We have 20 trained Community Organisers who can help you develop your idea, build connections with local people, and find others who are interested in the same social action idea as you.</span></li>
                     <li><p className='li-p-strong'>&#8226; &ensp; I am really concerned about changes to benefits. What can I do?</p>
                <span className='li-content'>There are a lot of local people who are facing changes due to welfare reforms. We want to help these people find out more about what challenges people are facing and what can be done about it. Get in touch with us and we can put you in contact with people in your community who have the same concerns. You can also use look for  social-action campaigns and events in the area.</span></li>
                     <li><p className='li-p-strong'>&#8226; &ensp; How can I get younger people to engage more in the community?</p>
                <span className='li-content'>We're already supporting local people to build social actions to help young people increase their connectivity to their local community. Take a look at our website to see what's currently on offer. If you've got a particular social action idea that you'd like to take forward, then get in touch and we can help you develop it further through one of our Community Organisers.</span></li>
                     <li><p className='li-p-strong'>&#8226; &ensp; If I list my social action event, where does it appear?</p>
                <span className='li-content'>Your event can be listed through this App, which means all that are using the App will see your event. We will also list it on our website and through our social media, for examples, we can promote it via Twitter @BrickworksN4.</span></li>
                     <li><p className='li-p-strong'>&#8226; &ensp; Will it cost me to hire a meeting space at Brickworks and am I limited to specific days or times?</p>
                <span className='li-content'>As we are developing Brickworks as a Social Action Hub we want to encourage local people to use the facilities this community centre offers. Brickworks is open seven days a week and from 08:00 through to 21:00 most days. We intend to offer the meeting space for free. Get in touch with us at Brickworks to find out more.</span></li>       
                     <li><p className='li-p-strong'>&#8226; &ensp; How are my personal details that I am entering being used?</p>
                <span className='li-content'>You can read the Brickworks Social Action Hub privacy policy</span><a href='../../../public/assets/privacy-policy-hcca.pdf'> here</a>.</li>
            </ul>
        </main>
        </div>
    </div>
  );}
}
//     <footer>
//         &copy; Brickworks Social Action Community 2018. 
//     </footer>     

export {Faq};