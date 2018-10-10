import React from "react";
//{ id:3 ,event_name : 'Get Green', string_agg : ['environment']}

 const EventComp = ( { id, event_name, string_agg}) => {
  return (
    <li>
      {event_name} 
       
      {string_agg} 

      </li>
  )
}

const EventByThemeComp = ( { theme, string_agg }) => {
  return (
    <li>
      
      {theme}
      {string_agg}

    </li>
  )
}

export {EventComp, EventByThemeComp};