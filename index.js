require('dotenv').config();

const server = require('./api/server.js')

const port = process.env.PORT || 5432;

server.listen(port, () => console.log(`listening to ${port}`));
