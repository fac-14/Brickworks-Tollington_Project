const base = require('../controllers/database/db_connection');

console.log('getAllEventsAirTable');

// exports.get = (request, response) => {
//   let allRecords = [];
//   // const getAllEventsAirTable = new Promise( (resolve, reject) => {
//   base('social_action_events').select({
//     fields: [
//       'event_id', 'event_name', 'event_description', 'event_location', 'event_date_time', 'categories', 'Photo', 'fullname_event_organiser', 'email_event_organiser', 'telephone_event_organiser'
//     ]   //photos left
//   }).eachPage((records, fetchNextPage) => {
//     allRecords = [...allRecords, ...records];
//     // allRecords.forEach( (record) => console.log(record.fields));
//     fetchNextPage();
//   }, (err) => {
//     if (err) {
//       response.status(500).send("something Broke");
//     }
//     else {
//       response.send(allRecords);
//     }
//   }

//   );

// };
// select({
//   // Selecting the first 3 records in Grid view:
//   filterByFormula: 'NOT({welcome_email_sent})',
//   fields: ['first_name', 'email'],
// })
exports.get = (request, response) => {
  let allRecords = [];
  // const getAllEventsAirTable = new Promise( (resolve, reject) => {
  base('social_action_events').select({
    filterByFormula:' IS_AFTER({event_date_time}, TODAY())',
    sort:[{field:'event_date_time', direction:'asc'}],
    fields: [
      'event_id', 'event_name', 'event_description', 'event_location', 'event_date_time', 'categories', 'Photo', 'fullname_event_organiser', 'email_event_organiser', 'telephone_event_organiser'
    ] 
  }).eachPage((records, fetchNextPage) => {
    allRecords = [...allRecords, ...records];
    // allRecords.forEach( (record) => console.log(record.fields));
    fetchNextPage();
  }, (err) => {
    if (err) {
      response.status(500).send("something Broke");
    }
    else {
      response.send(allRecords);
    }
  }

  );

};

