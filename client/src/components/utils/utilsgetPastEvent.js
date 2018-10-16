const checkResponse = response => {
  if(response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  // response.forEach( (val) => console.log(val.fields));
  console.log('response is response is ', response);
  return response.json();
}
// getAllEventsAirTable
//   .then(res => { //res is an array of objects
//     res.forEach((val) => console.log(val.fields));
//   })
//   .catch(err => console.log(err)); 
export const getPastEvents = () => {
  console.log('INSIDE UTILS getPastEvents');
  return fetch(`/api/getPastEventsAirTable`)
  .then(checkResponse)
  .catch(err => {
    throw new Error(`fetch getAllEvents failed ${err}`);
  })
}

// getAllEventsAirTable
//   .then(res => { //res is an array of objects
//     res.forEach((val) => console.log(val.fields));
//   })
//   .catch(err => console.log(err)); 

export default getPastEvents;