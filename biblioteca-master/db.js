const { Pool } = require('pg');  // Importa o Pool do pg para gerenciar conexões com o banco

// Cria uma nova instância de Pool com as configurações de conexão
const pool = new Pool({
  user: 'meu_user',            // Meu usuário do banco de dados
  host: 'localhost',               // Host onde o banco está rodando
  database: 'biblioteca',          // Nome do banco de dados
  password: '123456',           // Senha do usuário
  port: 5433                       // Porta padrão do PostgreSQL
});

module.exports = pool;  // Exporta o pool para ser usado em outros arquivo
