import React from "react";
//{ id:3 ,event_name : 'Get Green', string_agg : ['environment']}
export const EventComp = ( { id, event_name, string_agg}) => {
  return (
    <li>
       {event_name} 
       
      {string_agg} 

      </li>
  )
}


