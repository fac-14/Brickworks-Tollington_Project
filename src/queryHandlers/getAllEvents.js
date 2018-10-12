const db = require('../database/db_connection');

const getData =response => {
 
  //what we'll actually be sending

  // const on = 'undefined';
  // // cb();
  // console.log(on);

 let dataQuery = `SELECT events.event_id, events.event_name, string_agg(topics.theme, ', ') FROM events, topics, link_events_topics WHERE events.event_id = link_events_topics.link_event_id
 AND topics.topic_id = link_events_topics.link_topic_id
 GROUP BY events.event_id`;
 //what we'll be sending in test environment
 if(process.env.NODE_ENV==='test'){
 dataQuery = `SELECT events.event_id FROM events, topics, link_events_topics WHERE events.event_id = link_events_topics.link_event_id
 AND topics.topic_id = link_events_topics.link_topic_id
 GROUP BY link_events_topics.link_id, events.event_id, topics.topic_id`;
 }
  new Promise( (resolve, reject) => {
    console.log('i am in')
  //  if(process.env.NODE_ENV === 'test' && on===true) {
  //   db.query(dataQuery)
  //   .then(resolve = (res)=> {
  //     console.log(res.rows);
  //    //  not yet working, if db_test environment return value
  //    response.send(JSON.stringify(res.rows)[1].event_id);
  //  })
  //    .catch(err => reject(err));
  //  }
   
    db.query(dataQuery)
   .then((res)=> {
     console.log(res.rows);
    //  not yet working, if db_test environment return value
    response.send(JSON.stringify(res.rows));
  })
    .catch(err => reject(err));
   
  
 }) //means return res on this success
    //means return err on error
   
 
}
module.exports = getData;
