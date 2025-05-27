const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');  // Importa o controlador de usuários 

// Rota para criar um novo usuário
router.post('/', usuariosController.criarUsuario);

// Rota para listar todos os usuários
router.get('/', usuariosController.listarUsuarios);

// Rota para atualizar um usuário
router.put('/:id', usuariosController.atualizarUsuario);

// Rota para excluir um usuário
router.delete('/:id', usuariosController.excluirUsuario);

module.exports = router;  // Exporta o router
