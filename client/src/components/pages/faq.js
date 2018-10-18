import React from 'react';


class Faq extends React.Component {
    render() {
        return(
    <div>
        <div data-testid = "faq-page" className='wrapper'>
        <h1 className='pageHeadings'>FAQs</h1>
        <main>
            <ul>
                <li><p>&#x25C7; &ensp; How does Brickworks connect me with others who can help me develop my idea for a social action?</p>
                    [Answer here]</li>
                <li><p>&#x25C7; &ensp; I am really concerned about changes to benefits. What can I do?</p>
                    [Answer here]</li>
                <li><p>&#x25C7; &ensp; How can I get younger people to engage more in the community?</p>
                    [Answer here]</li>
                <li><p>&#x25C7; &ensp; If I list my social action event, where does it appear?</p>
                    [Answer here]</li>
                <li><p>&#x25C7; &ensp; Will it cost me to hire a meeting space at Brickworks and am I limited to specific days or times?</p>
                    [Answer here]</li>          
                <li><p>&#x25C7; &ensp; How are my personal details that I am entering being used?</p>
                    You can read the Brickworks Social Action Hub privacy policy <a href='../../../public/assets/privacy-policy-hcca.pdf'>here</a>.</li>
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