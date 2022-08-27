const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
const routesCharacters = require('./src/Routes/characters.routes');
const routesUser = require('./src/Routes/user.routes');
const connectToDatabase = require('./src/database/MongoDB/database')

const port = 3000;
const app = express();

connectToDatabase();
config();

app.use(express.json());
app.use(cors());
app.use('/characters', routesCharacters);
app.use('/users', routesUser);


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
