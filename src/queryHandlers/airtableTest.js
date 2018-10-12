const base = require('../database/db_connection')

let allRecords = [];
base('categories').select({
  fields: [
    'id',
    'name'
  ]
}).eachPage((records, fetchNextPage) => {

  allRecords = [...allRecords, ...records] //fill records in allrecords?
  allRecords.forEach((record) => console.log(record.fields))
  fetchNextPage();

}, (err) => {
  if (err) { console.error(err); return; }
});

///////////

// base('topics').select({
//     // Selecting the first 3 records in Grid view:
//     maxRecords: 3,
//     view: "Grid view"
// }).eachPage(function page(records, fetchNextPage) {
//     // This function (`page`) will get called for each page of records.

//     records.forEach(function(record) {
//         console.log('Retrieved', record.get('id'));
//     });

//     // To fetch the next page of records, call `fetchNextPage`.
//     // If there are more records, `page` will get called again.
//     // If there are no more records, `done` will get called.
//     fetchNextPage();

// }, function done(err) {
//     if (err) { console.error(err); return; }
// });