const express = require('express');
const bodyParser = require('body-parser');
const resHandler = require('./utils/reshandler');
const { Logger } = require('./utils/logger');
const settings = require('./config/settings')
var busboy = require('connect-busboy');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(busboy());

const api = require('./routes/api');

app.use(api);
app.use(resHandler.susscess);
app.use(resHandler.error);

const port = settings.PORT || 3000;

app.listen(port, () => {
  Logger.info(`Server running on port: ${settings.PORT}`);
});

module.exports = app;