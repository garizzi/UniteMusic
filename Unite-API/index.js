// index.js

const express = require('express');
const sequelize = require('./sequelize'); // Importa a instância do Sequelize
const User = require('./models/User');
const app = express();
const port = 3000;

// Conectar ao banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Connected to the database');
    // Sincronizar modelos com o banco de dados
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log('Models synced successfully');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Middleware para parsear JSON
app.use(express.json());

// Importar rotas
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
