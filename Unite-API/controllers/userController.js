const User = require('../models/User');

// Criar um novo usuário
exports.createUser = async (req, res) => {
  const { name, email, password, dateOfBirth } = req.body;
  
  if (!name || !email || !password || !dateOfBirth) {
    return res.status(400).json({ error: 'Name, email, password, and date of birth are required' });
  }

  try {
    const newUser = await User.create({
      name,
      email,
      password,
      dateOfBirth
    });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obter todos os usuários
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ error: error.message });
  }
};

// Atualizar um usuário por ID numérico
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    console.log('Recebendo dados para atualizar usuário:', { id, name, email, password });

    const user = await User.findByPk(id); // Usando numericId como chave primária
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.password = password || user.password;

    await user.save();
    console.log('Usuário atualizado com sucesso:', user);
    res.status(200).json(user);
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    res.status(500).json({ error: error.message });
  }
};

// Deletar um usuário por ID numérico
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log('Recebendo dados para deletar usuário:', { id });

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await user.destroy();
    console.log('Usuário deletado com sucesso:', user);
    res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
    res.status(500).json({ error: error.message });
  }
};