const mongoose = require('mongoose');

const connectToDatabase = () => {
    console.log('Conectando com o banco de dados...');
    mongoose
      .connect(
        'mongodb+srv://admin:admin@cluster0.2ixjxc3.mongodb.net/API-Ricky-and-Morty?retryWrites=true&w=majority', 
        {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log('MongoDB conectado!'))
      .catch((error) => {
        console.log(`Erro ao conectar com o MongoDB: ${error}`);
      });
  };
  
  module.exports = connectToDatabase;
