const base = require('../database/db_connection');
const queryARecord = require('./queryARecord')

let allRecords = [];

const getAllEventsByDate =
  new Promise((resolve, reject) => {
    base('event_date_times').select({
      // filterByFormula: 'IS_AFTER({event_date_time}, TODAY())',
      fields: [
        'id', 'event_date_time', 'social_action_events'
      ]
    }).eachPage((records, fetchNextPage) => {
      allRecords = [...allRecords, ...records];
      // allRecords.forEach( (record) => console.log(record.fields));
      fetchNextPage();
    }
      ,
      (err) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(allRecords);
        }
      }
    )
      ;
  })
//  .then(allRecords => resolve(allRecords))
//  .catch(err => reject(err))

// getAllEventsByDate
//   .then(res => { //res is an array of objects
//     res.forEach((val) => console.log(val.fields));
//   })
//   .catch(err => console.log(err));

//loop in the events array( as there can be more than one event) //cancelled new relation is only one event per record in event_date_time entry

getAllEventsByDate
  .then(allRecords => { //res is an array of objects
    allRecords.forEach((record) => {
      //  console.log(val.fields.events[0] ) 
      //queryARecord('social_action_events', val.fields.events[0])
      queryARecord('social_action_events', record.fields.social_action_events)
        .then(eventRecord => {
          eventRecord.event_date_times = record.fields.event_date_time;
          console.log(eventRecord)
        })
        .catch(err2 => console.log(err2))
    });
  })
  .catch(err => console.log(err));
