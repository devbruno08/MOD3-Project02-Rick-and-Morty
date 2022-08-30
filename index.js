const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
const routesCharacters = require('./src/Routes/characters.routes');
const routesUser = require('./src/Routes/user.routes');
const routesAuth = require('./src/Routes/auth.routes');
const connectToDatabase = require('./src/database/MongoDB/database');

const app = express();

connectToDatabase();
config();

const swagger = require('swagger-ui-express');
const swaggerDocs = require('./src/docs/swagger.json');
app.use('/docs', swagger.serve, swagger.setup(swaggerDocs));

app.use(express.json());
app.use(cors());
app.use(routesCharacters);
app.use(routesUser);
app.use(routesAuth);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
