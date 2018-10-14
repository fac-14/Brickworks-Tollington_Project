import React from 'react';


class Faq extends React.Component {
    render() {
        return(
    <div>
        <div className='wrapper'>
        <h2 className='pageHeadings'>FAQs</h2>
        <div className='sidebar'></div>
        <main>
                <ul>
                <li><h3>How does Brickworks connect me with others who can help me develop my idea for a social action?</h3>
                    [Answer here]</li>
                <li><h3>I am really concerned about changes to benefits. What can I do?</h3>
                    [Answer here]</li>
                <li><h3>How can I get younger people to engage more in the community?</h3>
                    [Answer here]</li>
                <li><h3>If I list my social action event, where does it appear?</h3>
                    [Answer here]</li>
                <li><h3>Will it cost me to hire a meeting space at Brickworks and am I limited to specific days or times?</h3>
                    [Answer here]</li>          
                <li><h3>How are my personal details that I am entering being used?</h3>
                    You can read the Brickworks Social Action Hub privacy policy <a href='../../../public/assets/privacy-policy-hcca.pdf'>here</a>.</li>
            </ul>
        </main>
        </div>
    </div>

        );}
}

export {Faq};