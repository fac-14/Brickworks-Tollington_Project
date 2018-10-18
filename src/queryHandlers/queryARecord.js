const base = require('../controllers/database/db_connection');
// console.log('query a record airtable');

const queryARecord = (table_name, primary_key) => {
  // console.log({table_name, primary_key})
  return new Promise((resolve, reject) => {

    base(table_name).find(primary_key, (err, record) => {
      let reqdDate = record.fields.event_date_time.split('T')[0];
      let reqdTime = record.fields.event_date_time.split('T')[1];
      reqdTime = reqdTime.split(':');
      let finalTime = reqdTime[0] + ':' + reqdTime[1];
      record.fields.event_date_time = reqdDate + ' ' + finalTime;
      record.fields.event_name = record.fields.event_name + record.id;
      if (err) {
        reject(err)
      } else {
        resolve(record)
      }
    })
  })
}


// queryARecord('social_action_events', 'rec5nOKCbHgnHm6E9')
//   .then(console.log)
//   .catch(console.log)

module.exports = queryARecord;
