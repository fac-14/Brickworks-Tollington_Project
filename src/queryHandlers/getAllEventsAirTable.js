const base = require('../database/db_connection');

// exports.get = (request, response) => {
 console.log('getAllEventsAirTable' );
 
 let allRecords = [];
 base('social_action_events').select({
   fields: [
     'event_id', 'event_name', 'event_description', 'event_location', 'recurrent_event_description', 'categories', 'event_date_time'
   ]   //photos left
 }).eachPage( (records, fetchNextPage) => {
   allRecords = [...allRecords, ...records];
   allRecords.forEach( (record) => console.log(record.fields));
   fetchNextPage();
 }, (err) => {
   if(err) {console.error(err); return;}
 });

// }

 
