const app = require('./app')
const express = require('express')
// const controllers  = require('../src/controllers')


// all requests which begin with /api will go through to apiRoutes
const port = process.env.PORT || 5000;
// app.use(controllers)



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
