const Usuario = require('../models/usuario');  // Importa o modelo de Usuário

// Função para criar um novo usuário
exports.criarUsuario = async (req, res) => {
  const { nome, email, telefone } = req.body;
  try {
    const novoUsuario = await Usuario.criar(nome, email, telefone);
    res.status(201).json(novoUsuario);  // Retorna o novo usuário criado
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar o usuário' });
  }
};

// Função para listar todos os usuários
exports.listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.listarTodos();
    res.status(200).json(usuarios);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao listar usuários' });
  }
};

// Função para atualizar um usuário
exports.atualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nome, email, telefone } = req.body;
  try {
    const usuarioAtualizado = await Usuario.atualizar(id, nome, email, telefone);
    res.status(200).json(usuarioAtualizado);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar o usuário' });
  }
};

// Função para excluir um usuário
exports.excluirUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    await Usuario.excluir(id);
    res.status(204).send();  // Retorna uma resposta sem conteúdo
  } catch (err) {
    res.status(500).json({ error: 'Erro ao excluir o usuário' });
  }
};
