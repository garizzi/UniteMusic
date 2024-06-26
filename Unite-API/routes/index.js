const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota de exemplo
router.get('/', (req, res) => {
  res.send('Hello World from the API!');
});

// Rotas de usuário
router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);
router.put('/users/:id', userController.updateUser);  // Rota para atualizar usuário
router.delete('/users/:id', userController.deleteUser);  // Rota para deletar usuário


module.exports = router;