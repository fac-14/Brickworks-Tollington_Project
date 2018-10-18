
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
  
 
  export const getOneEvent = () => {
   
    console.log('INSIDE UTILS222');
    return fetch(`/api/queryARecord`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: data,
})
    .then(checkResponse)
    .catch(err => {
        console.log('Error is ', err)
        this.props.history.push('/500error');
    })
  }
  
  // getAllEventsAirTable
  //   .then(res => { //res is an array of objects
  //     res.forEach((val) => console.log(val.fields));
  //   })
  //   .catch(err => console.log(err)); 
  
  export default getOneEvent;