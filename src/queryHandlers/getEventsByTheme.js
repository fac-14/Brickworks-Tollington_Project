const db = require('../database/db_connection');

exports.get = (request, response) => {
    const dataQuery = `
    SELECT events.event_id, events.event_name, events.event_description, events.date_time,events.event_location, topics.theme
    FROM events
    INNER JOIN link_events_topics ON events.event_id = link_events_topics.link_event_id
    INNER JOIN topics ON topics.topic_id = link_events_topics.link_topic_id
    WHERE topics.theme = 'employment'
    ORDER BY events.date_time`;
    

// SELECT topics.theme, string_agg(events.event_name, ', ') AS event_name
//     FROM events, topics, link_events_topics WHERE events.event_id = link_events_topics.link_event_id
//     AND topics.theme = 'employment'
//     AND topics.topic_id = link_events_topics.link_topic_id
//     GROUP BY topics.theme

    new Promise ((resolve, reject) => {
        db.query(dataQuery)
        .then ((res) => {
            console.log(res.rows);console.log('STRINGIFIED:')
            console.log(JSON.stringify(res.rows));
         response.send(JSON.stringify(res.rows))
        })
         .catch(err => reject(err));
    
    });
}

// theme    |           event_name
// ------------+--------------------------------
//  employment | Youth Action, Write a great CV
// const eventsByThemeData = [
//   { id:1 , theme : 'employment', event_name: 'Youth Action, Write a great CV'} ] ;
// exports.get = (req, res) => {
//     console.log('JSON JSON');
//     console.log(JSON.stringify(eventsByThemeData));
//     res.send(JSON.stringify(eventsByThemeData));
//   }
  
//   //   event_id |                  event_description                   |      date_time      |  event_location  |   theme    
//   //   ----------+------------------------------------------------------+---------------------+------------------+------------
//   //           4 | Learn how to write a punchy CV to help you get a job | 2018-10-20 12:00:00 | Brickworks       | employment
//   //           2 | Help youth get skills                                | 2018-10-11 16:30:00 | Tollington House | employment
//   const eventsByThemeData = [
//       {event_id: "4", event_description: "Learn how to write a punchy CV to help you get a job",
//       date_time: "2018-10-20 12:00:00", event_location: "Brickworks", theme:"employment" },
//       {event_id: "2", event_description: "Help youth get skills",
//       date_time: "2018-10-11 16:30:00", event_location: "Tollington House", theme:"employment" } 
//   ]

