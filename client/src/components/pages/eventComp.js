import React from "react";
import { Link } from "react-router-dom";

const EventComp = ({ event_id, event_name, event_description, event_date_time, event_location, fullname_event_organiser, 
  email_event_organiser, telephone_event_organiser}) => {
  return (

    //   <Link key={index} to={caseLink}>
    //     <div key={index}>{element.title}</div>
    //   </Link>
    // );
    // <Link to='/eventsByTheme'>Events By Theme</Link>

    <Link key={event_id} to={'/event-detailed/' + event_name} >
      <li>
        {event_name}
        {event_description}
        {event_date_time}
        {event_location}
        {fullname_event_organiser}
        {email_event_organiser}
        {telephone_event_organiser}
      </li>
    </Link >
  )
}
const EventByThemeComp = ({ event_id, event_name, event_description, date_time, event_location, theme }) => {
  return (
    <li>

      {event_id}
      {event_name}
      {event_description}
      {date_time}
      {event_location}
      {theme}

    </li>
  )
}

export { EventComp, EventByThemeComp };