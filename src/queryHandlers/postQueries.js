// const dbconnection = require('../database/db_connection'); // this is the pool

// const checkUsers = (name,email,skill,option,callback,cb) => {
//   dbconnection.query(`SELECT * FROM users WHERE name='${name}' AND email='${email}'`, 
//     (err, checkResponse) => {
//       if (err) {
//         console.log('error')
//       } else if (checkResponse.rows.length > 0) {
//         console.log('user exists', checkResponse.rows)
//         cb();
//       } else if (checkResponse.rows.length == 0 ) {
//         console.log('no user', checkResponse.rows)
//         dbconnection.query(`INSERT INTO users (name, email) VALUES ('${name}','${email}');`, 
//         (err,workedOk) => {
//           if (err) throw err;
//           else cb();
//         })
//       }
//     }
//   );
  
// }

// const checkSkill = (name,email,skill,option,callback,cb) => {
//   dbconnection.query(`SELECT FROM skills WHERE skill='${skill}'`, 
//     (err, checkResponse) => {
//       if (err) {
//         console.log('error')
//       } else if (checkResponse.rows.length > 0) {
//         // console.log('skill exists', checkResponse.rows)
//         cb();
//       } else if (checkResponse.rows.length == 0 ) {
//         // console.log('no skill exists', checkResponse.rows)
//         dbconnection.query(`INSERT INTO skills (skill) VALUES ('${skill}');`, 
//         (err, worked) => {
//           if (err) throw err;
//           else cb();
//         })
//       }
//     }
//   )
// };

// const updateDB = (name,email,skill,option,callback,cb) => {

//   if (option === 'offer') {
//     const query = `INSERT INTO offers (user_id, skill_id) VALUES (
//       (SELECT id FROM users WHERE name='${name}' AND email='${email}'),
//       (SELECT id FROM skills WHERE skill='${skill}')
//     );`;

//     dbconnection.query(query, (err, insertOffer) => {
//       if (err) {
//         console.log(err);
//         throw new Error(err, 'the offer could not be added to offer table');
//         callback();
//       } 
//       else { 
//         // console.log('offer added sucessfully');
//         callback();
//       }  
//     }
//   )
//   } else if (option == 'request') {

//     const query = `INSERT INTO requests (user_id, skill_id) VALUES (
//       (SELECT id FROM users WHERE name='${name}' AND email='${email}'),
//       (SELECT id FROM skills WHERE skill='${skill}')
//     );`;

//     dbconnection.query(query, (err, insertOffer) => {
//       if (err) {
//         console.log(err);
//         throw new Error(err, 'the request could not be added to request table');
//         callback();
//       } 
//       else {
//         // console.log('request added sucessfully');
//         callback();
//       }
//     }
//   )
//   }
// }


// const addToDatabase = (name,email,skill,option, callback) => {
//   console.log('offer write is active')
//   checkUsers(name,email,skill,option, callback, () => {
//     checkSkill(name,email,skill,option, callback, () => {
//       updateDB(name,email,skill,option, callback);
//     });
//   });
// };

// module.exports = { addToDatabase, checkUsers, checkSkill, updateDB };