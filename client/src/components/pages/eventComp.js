import React from "react";
import { Link } from "react-router-dom";

const EventComp = ({ event_id, event_name, event_description, event_date_time, event_location, fullname_event_organiser, 
  email_event_organiser, telephone_event_organiser}) => {
  return (

    <Link key={event_id} to={'/event-detailed/' + event_name} >
      <ul>
        <li className='li-style1'>{event_name}</li>
        <li>{event_description}</li>
        <li>{event_date_time}</li>
        <li>{event_location}</li>
        {/* <li>{fullname_event_organiser}</li>
        <li>{email_event_organiser}</li>
        <li>{telephone_event_organiser}</li> */}
      </ul>
    </Link >
  )
}

const EventByThemeComp = ({ event_id, event_name, event_description, date_time, event_location, theme }) => {
  return (
    <ul>
      <li>{event_id}</li>
      <li>{event_name}</li>
      <li>{event_description}</li>
      <li>{date_time}</li>
      <li>{event_location}</li>
      <li>{theme}</li>
    </ul>
  )
}

const SingleEvent = ({ event_id, event_name, event_description, event_date_time, event_location, fullname_event_organiser, 
  email_event_organiser, telephone_event_organiser}) => {
  return (

    //   <Link key={index} to={caseLink}>
    //     <div key={index}>{element.title}</div>
    //   </Link>
    // );
    // <Link to='/eventsByTheme'>Events By Theme</Link>

    <div key={event_id} to={'/event-detailed/' + event_name} >
      <li>
        {event_name}
        {event_description}
        {event_date_time}
        {event_location}
        {fullname_event_organiser}
        {email_event_organiser}
        {telephone_event_organiser}
      </li>
    </div>
  )
}
const FormErrors = ({formErrors}) =>
<div className='formErrors'>
{Object.keys(formErrors).map((fieldName, i) => {
  if(formErrors[fieldName].length > 0){
    return (
      <p key={i}>{fieldName} {formErrors[fieldName]}</p>
    )
    } else {
    return '';
  }
})}

</div>
export { SingleEvent, FormErrors, EventComp, EventByThemeComp };
