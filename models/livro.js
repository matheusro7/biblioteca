const pool = require('../db');  // Importa a conexão com o banco

const Livro = {
  // Cria um novo livro
  async criar(titulo, autor, ano, genero) {
    const res = await pool.query(
      'INSERT INTO livros (titulo, autor, ano, genero, disponivel) VALUES ($1, $2, $3, $4, true) RETURNING *',
      [titulo, autor, ano, genero]
    );
    return res.rows[0];
  },

  // Lista todos os livros
  async listarTodos() {
    const res = await pool.query('SELECT * FROM livros');
    return res.rows;
  },

  // Atualiza um livro
  async atualizar(id, titulo, autor, ano, genero, disponivel) {
    const res = await pool.query(
      'UPDATE livros SET titulo = $1, autor = $2, ano = $3, genero = $4, disponivel = $5 WHERE id = $6 RETURNING *',
      [titulo, autor, ano, genero, disponivel, id]
    );
    return res.rows[0];
  },

  // Exclui um livro
  async excluir(id) {
    await pool.query('DELETE FROM livros WHERE id = $1', [id]);
  }
};

module.exports = Livro;  // Exporta o modelo para ser usado em controladores e rotas
