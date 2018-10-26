const base = require('../controllers/database/db_connection');


exports.get = (request, response) => {
  let allRecords = [];
  base('social_action_events').select({
    filterByFormula:' IS_BEFORE({event_date_time}, TODAY())',
    sort:[{field:'event_date_time', direction:'desc'}],
    fields: [
      'event_id', 'event_name', 'event_description', 'event_location', 'event_date_time', 'recurring_event_description', 'categories', 'fullname_event_organiser', 'email_event_organiser', 'telephone_event_organiser'
    ]  
  }).eachPage((records, fetchNextPage) => {
    allRecords = [...allRecords, ...records];
    

    allRecords = allRecords.map ( record => {
      // console.log(record.fields);
      let reqdDate = record.fields.event_date_time.split('T')[0];
      let reqdTime = record.fields.event_date_time.split('T')[1];
      reqdTime = reqdTime.split(':');
      let finalTime = reqdTime[0] + ':' + reqdTime[1];
      record.fields.event_date_time = reqdDate + ' ' + finalTime; 
      record.fields.event_name = record.fields.event_name + record.id;
      return record;
    })
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

