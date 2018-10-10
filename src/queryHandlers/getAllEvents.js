const db = require('../database/db_connection');

exports.get = (request, response) => {
 console.log('hleaohoa' );
 const dataQuery = `SELECT events.event_id, events.event_name, string_agg(topics.theme, ', ')
 FROM events, topics, link_events_topics WHERE events.event_id = link_events_topics.link_event_id
 AND topics.topic_id = link_events_topics.link_topic_id
 GROUP BY events.event_id`;

  new Promise( (resolve, reject) => {
   db.query(dataQuery) 
   
   .then((res)=> {
    response.send(JSON.stringify(res.rows))
  }) //means return res on this success
   .catch(err => reject(err)); //means return err on error
   
 });
 
}

// const allEventsData = () => {

//   console.log('Inside GetallEvent');

  

// }
//module.exports = getAllEvent;

// exports.get = (req, res) => {
//   console.log('JSON JSON');
//   console.log(JSON.stringify(allEventsData));
//   res.send(JSON.stringify(allEventsData));
// }
// // event_name   |    string_agg
// // ----------------+-------------------
// //  Youth Action   | youth, employment
// //  Poverty Action | poverty
// //  Get Green      | environment
// const allEventsData = [
//   { id:1 , event_name : 'Youth Action', string_agg: ['youth', 'employment'] },
//   { id:2 , event_name : 'Poverty Action', string_agg: ['poverty'] },
//   { id:3 , event_name : 'Get Green', string_agg : ['environment']}
// ] ;