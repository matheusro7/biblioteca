const Livro = require('../models/livro');  // Importa o modelo de Livro

// Função para criar um novo livro
exports.criarLivro = async (req, res) => {
  const { titulo, autor, ano, genero } = req.body;
  try {
    const novoLivro = await Livro.criar(titulo, autor, ano, genero);
    res.status(201).json(novoLivro);  // Retorna o novo livro criado
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar o livro' });
  }
};

// Função para listar todos os livros
exports.listarLivros = async (req, res) => {
  try {
    const livros = await Livro.listarTodos();
    res.status(200).json(livros);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao listar livros' });
  }
};

// Função para atualizar um livro
exports.atualizarLivro = async (req, res) => {
  const { id } = req.params;
  const { titulo, autor, ano, genero, disponivel } = req.body;
  try {
    const livroAtualizado = await Livro.atualizar(id, titulo, autor, ano, genero, disponivel);
    res.status(200).json(livroAtualizado);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar o livro' });
  }
};

// Função para excluir um livro
exports.excluirLivro = async (req, res) => {
  const { id } = req.params;
  try {
    await Livro.excluir(id);
    res.status(204).send();  // Retorna uma resposta sem conteúdo
  } catch (err) {
    res.status(500).json({ error: 'Erro ao excluir o livro' });
  }
};
