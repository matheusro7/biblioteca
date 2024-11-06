// db.js
const { Pool } = require('pg');  // Importa o Pool do pg para gerenciar conexões com o banco

// Cria uma nova instância de Pool com as configurações de conexão
const pool = new Pool({
  user: 'seu_usuario',            // Usuário do banco de dados
  host: 'localhost',               // Host onde o banco está rodando
  database: 'biblioteca',          // Nome do banco de dados
  password: 'sua_senha',           // Senha do usuário
  port: 5432                       // Porta padrão do PostgreSQL
});

module.exports = pool;  // Exporta o pool para ser usado em outros arquivos
