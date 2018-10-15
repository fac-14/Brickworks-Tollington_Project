const queryARecord = require('./queryARecord.js');


// const inputArr = [
//   {
//     event_description: 'Get together to fight poverty',
//     event_date_time: ['recqmyuATjI4b3crY'],
//     event_location: 'Brickworks',
//     categories: ['rec2eJiKmR720h2Xx', 'recYCNuG0QcxNBlln'],
//     Photo:
//       [{
//         id: 'attqnXiYoS3Ul3FpU',
//         url:
//           'https://dl.airtable.com/KHyE3SrISP1fap4dp4dQ_OctopusImage.jpg',
//         filename: 'OctopusImage.jpg',
//         size: 22700,
//         type: 'image/jpeg',
//         thumbnails: [Object]
//       }],
//     event_name: 'Poverty Action',
//     event_id: 1
//   },
//   {
//     event_description: 'Help youth get skills',
//     event_date_time: ['rec3DlJS3bm6DJC79'],
//     event_location: 'Brickworks',
//     categories: ['recOKEwJ61qs5bBjW', 'recYCNuG0QcxNBlln'],
//     event_name: 'Youth Action',
//     event_id: 2
//   },
//   { event_id: 4 },
//   {
//     event_description: 'Let\'\'s plant a tree',
//     event_date_time: ['rec0cbM8MvzIWax0Q'],
//     event_location: 'Town Hall',
//     categories: ['recTyXnPQiVMwTQH9'],
//     event_name: 'Get Green',
//     event_id: 3
//   }
// ];




populateAFieldInfo = (inputArr, table_name, field_name) => {
  // console.log(inputArr);
  inputArr.map(arr => {
              if(arr.field_name){
                // console.log(arr.event_date_time);
                queryARecord(table_name, arr.field_name)
                .then(res => {
                  arr.field_name = res.field_name;
                  console.log(arr.field_name);
                }) 
                .catch(err => console.log(err));
              }
              return arr;
  })
  // console.log(inputArr); //this won't work as this is executed before the above promise finishes
}


// populateAFieldInfo(inputArr, 'event_date_times', 'event_date_time' );

module.exports = populateAFieldInfo;
