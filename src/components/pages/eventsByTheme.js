import React from 'react';
//import more stuff later
import getEventsByTheme from '../utils/utilsGetEventsByTheme';
import {EventByThemeComp} from './eventComp';

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
        console.log('Frontend Getting events by theme', response);
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
                        <EventByThemeComp key={event.event_id} {...event} />
                    )
                )}
            </ul>
        </div>
    )
}
}

export default EventsByTheme;