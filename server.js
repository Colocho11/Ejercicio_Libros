const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const db = require('./config/db.config.js'); // Ruta 

// force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  console.log('Resync with { force: true }');
}); 

let router = require('./routers/router.js'); // Ruta
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/', router);

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido Estudiantes de UMG" });
});

// Crear un servidor
const server = app.listen(8080, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log(`App listening at http://${host}:${port}`); 
});
