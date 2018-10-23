const checkResponse = response => {
    if(response.status !=200) {
        console.log(`Unsuccessful request, ${response.status}`);
        return;
    }
    console.log('The response is ', response);
    return response.json();
}

export const getEventsByTheme = () => {
    return fetch(`/api/getEventsByTheme`)
    .then(checkResponse)
    .catch(err => {
        throw new Error (`Fetching getEventsByTheme failed ${err}`);
    })
}

export default getEventsByTheme;

// exports.get = (req, res) => {
//   console.log('JSON JSON');
//   console.log(JSON.stringify(allEventsData));
//   res.send(JSON.stringify(allEventsData));
// }
// // event_name   |    string_agg
// // ----------------+-------------------
// //  Youth Action   | youth, employment
// //  Poverty Action | poverty
// //  Get Green      | environment
// const allEventsData = [
//   { id:1 , event_name : 'Youth Action', string_agg: ['youth', 'employment'] },
//   { id:2 , event_name : 'Poverty Action', string_agg: ['poverty'] },
//   { id:3 , event_name : 'Get Green', string_agg : ['environment']}
// ] ;

