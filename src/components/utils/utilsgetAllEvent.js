// const db = require('../database/db_connection');

// const getAllEvent = () => {
//   console.log('Inside GetallEvent');
//   var dataQuery = `SELECT events.event_name, string_agg(topics.theme, ', ')
//   FROM events, topics, link_events_topics WHERE events.event_id = link_events_topics.link_event_id
//   AND topics.topic_id = link_events_topics.link_topic_id
//   GROUP BY events.event_name`;

//   return new Promise( (resolve, reject) => {
//     db.query(dataQuery)
//     .then(res => resolve(res))
//     .catch(err => reject(err));
//   });

// }
// module.exports = getAllEvent;
// const getAllEvents = async () => {
//   const response = await fetch(`/api/getAllEvents`);

//   const body = await response.json();

//   if(response.status !== 200 ) throw Error(body.message);
//   return body;
// };


 const checkResponse = response => {
  if(response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  console.log('response is response is ', response);
  return response.json();
}

export const getAllEvents = () => {
  console.log('INSIDE UTILS');
  return fetch(`/api/getAllEvents`)
  .then(checkResponse)
  .catch(err => {
    throw new Error(`fetch getAllEvents failed ${err}`);
  })
}

export default getAllEvents;