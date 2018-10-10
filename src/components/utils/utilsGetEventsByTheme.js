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