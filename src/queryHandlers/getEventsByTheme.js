const db = require('../database/db_connection');

exports.get = (request, response) => {
    const dataQuery = `
    SELECT topics.theme, string_agg(events.event_name, ', ')
    FROM events, topics, link_events_topics WHERE events.event_id = link_events_topics.link_event
     _id
    AND topics.theme = 'employment'
    AND topics.topic_id = link_events_topics.link_topic_id
    GROUP BY topics.theme`;

    new Promise ((resolve, reject) => {
        console.log('Oopppps');
        db.query(dataQuery)
        .then ((res) => {
            console.log(res);
         response.send(JSON.stringify(res.rows))
        })
         .catch(err => reject(err));
    
    });
}

