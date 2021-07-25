const Express = require('express');
const cors = require('cors');

const { router } = require('./routes');

const app = Express();

app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use(router);

module.exports = { app };