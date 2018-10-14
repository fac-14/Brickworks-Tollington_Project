const app = require('./app')

// all requests which begin with /api will go through to apiRoutes
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
