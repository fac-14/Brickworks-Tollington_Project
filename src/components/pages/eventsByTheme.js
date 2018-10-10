import React from 'react';
//import more stuff later
import getEventsByTheme from '../utils/utilsGetEventsByTheme';

class EventsByTheme extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            eventsByTheme : [],
        }
    }
componentDidMount() {
    getEventsByTheme()
    .then(response => {
        console.log('Getting events by theme');
        this.setState( { eventsByTheme: response });
    })
    .catch(err => console.log(err));
}
render() {
    const {eventsByTheme} = this.state;
    return(
        <div>
            <ul>
                {eventsByTheme.map(
                    event => (
                        <EventComp key={index} {...event} />
                    )
                )}
            </ul>
        </div>
    )
}
}

export default EventsByTheme;