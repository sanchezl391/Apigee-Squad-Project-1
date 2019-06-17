const express = require('express');
const config = require('./config/server.js'); 
const app = express();

const helloWorldRoutes = require('./routes/hello.js');
app.use(helloWorldRoutes);

app.listen(config.port, () => console.log(`App listening on port ${config.port}!`));
