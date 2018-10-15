const base = require('../controllers/database/db_connection');
// console.log('query a record airtable');


const queryARecord = (table_name, primary_key) => {
  return new Promise((resolve, reject) => {

    base(table_name).find(primary_key, (err, record) => {
      if (err) {
        reject(err)
      } else {
        resolve(record.fields)
      }
    })
  })
}


queryARecord('social_action_events', 'rec5nOKCbHgnHm6E9')
  .then(console.log)
  .catch(console.log)

module.exports = queryARecord;
