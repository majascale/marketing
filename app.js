const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.set('port', (process.env.PORT || 8080));

