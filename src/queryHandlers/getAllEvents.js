const db = require('../database/db_connection');

const getData = (response) => {
 
  //what we'll actually be sending
 let dataQuery = `SELECT events.event_id, events.event_name, string_agg(topics.theme, ', ') FROM events, topics, link_events_topics WHERE events.event_id = link_events_topics.link_event_id
 AND topics.topic_id = link_events_topics.link_topic_id
 GROUP BY events.event_id`;
 //what we'll be sending in test environment
 if(process.env.NODE_ENV==='test'){
 dataQuery = `SELECT * FROM events, topics, link_events_topics WHERE events.event_id = link_events_topics.link_event_id
 AND topics.topic_id = link_events_topics.link_topic_id
 GROUP BY link_events_topics.link_id, events.event_id, topics.topic_id`;
 }
  new Promise( (resolve, reject) => {
   db.query(dataQuery) 
   
   .then((res)=> {
    //  not yet working, if db_test environment return value
    // if(process.env.NODE_ENV === 'db_test') {
    //   return res.rows[0].event_id;
    //   console.log(res.rows[0]);
    // }
    // else {
    response.send(JSON.stringify(res.rows));
  //  }
    
  }) //means return res on this success
   .catch(err => reject(err)); //means return err on error
   
 });
 
}
module.exports = getData;