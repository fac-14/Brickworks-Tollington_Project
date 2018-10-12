import React from "react";
import { Link } from "react-router-dom";

const EventComp = ({ event_id, event_name, event_description, date_time, event_location, string_agg }) => {
  return (

    //   <Link key={index} to={caseLink}>
    //     <div key={index}>{element.title}</div>
    //   </Link>
    // );
    // <Link to='/eventsByTheme'>Events By Theme</Link>

    <Link key={event_id} to={'/event-detailed/' + event_id} >
      <li>
        {event_name}
        {event_description}
        {date_time}
        {event_location}
        {string_agg}
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