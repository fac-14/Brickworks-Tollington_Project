const app = require('./app')
const path = require('path')
const express = require('express')
// const controllers  = require('../src/controllers')


// all requests which begin with /api will go through to apiRoutes
const port = process.env.PORT || 5000;
// app.use(controllers)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'parcel:build')))
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
