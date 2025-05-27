const express = require('express');  // Importa o módulo Express para criar o servidor
const app = express();               // Inicializa o app Express
const livrosRoutes = require('./routes/livros');      // Importa as rotas de Livros
const usuariosRoutes = require('./routes/usuarios');  // Importa as rotas de Usuários

app.use(express.json()); 

// Define as rotas para Livros e Usuários, prefixando com '/api'
app.use('/api/livros', livrosRoutes);      // Rota base para as operações de Livros
app.use('/api/usuarios', usuariosRoutes);  // Rota base para as operações de Usuários

// Inicia o servidor na porta 3000
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
