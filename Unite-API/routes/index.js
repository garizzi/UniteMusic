const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota de exemplo
router.get('/', (req, res) => {
  res.send('Hello World from the API!');
});

// Rotas de usuário
router.post('/users', userController.createUser); // Rota para cadastrar usuário
router.get('/users', userController.getUsers); // Rota para buscar todos os usuários
router.get('/users/:id', userController.getUserById); // Rota para buscar um usuário pelo numericId
router.put('/users/:id', userController.updateUser);  // Rota para atualizar usuário
router.delete('/users/:id', userController.deleteUser);  // Rota para deletar usuário


module.exports = router;