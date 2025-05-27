const pool = require('../db');  // Importa a conexão com o banco 

const Usuario = {
  // Cria um novo usuário
  async criar(nome, email, telefone) {
    const res = await pool.query(
      'INSERT INTO usuarios (nome, email, telefone) VALUES ($1, $2, $3) RETURNING *',
      [nome, email, telefone]
    );
    return res.rows[0];  // Retorna o usuário criado
  },

  // Lista todos os usuários
  async listarTodos() {
    const res = await pool.query('SELECT * FROM usuarios');
    return res.rows;  // Retorna todos os usuários
  },

  // Atualiza um usuário
  async atualizar(id, nome, email, telefone) {
    const res = await pool.query(
      'UPDATE usuarios SET nome = $1, email = $2, telefone = $3 WHERE id = $4 RETURNING *',
      [nome, email, telefone, id]
    );
    return res.rows[0];  // Retorna o usuário atualizado
  },

  // Exclui um usuário
  async excluir(id) {
    await pool.query('DELETE FROM usuarios WHERE id = $1', [id]);
  }
};

module.exports = Usuario;  // Exporta o modelo para ser usado em controladores e rotas
