import React from "react";
//{ id:3 ,event_name : 'Get Green', string_agg : ['environment']}

 const EventComp = ( { id, event_name, event_description, date_time, event_location, string_agg}) => {
  return (
    <li>
      {event_name} 
      {event_description}
      {date_time}
      {event_location}
      {string_agg} 

      </li>
  )
}
const EventByThemeComp = ( { event_id, event_name, event_description, date_time, event_location, theme }) => {
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

export {EventComp, EventByThemeComp};