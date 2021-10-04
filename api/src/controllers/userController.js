import User from '../models/User';

module.exports = {
  async store(req, res) {
    const { nome, email, password } = req.body;
    try {
      const novoUser = await User.create({
        nome,
        email,
        password,
      });
      const { id } = novoUser;
      return res.json({
        id,
        nome,
        email,
      });
    } catch (err) {
      return res.status(401).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  },

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.status(200).json(users);
    } catch (error) {
      return res.json(null);
    }
  },

  // Show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.status(200).json({ id, nome, email });
    } catch (error) {
      return res.json(null);
    }
  },

  // Update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(404).json({
          errors: ['Usuário não encontrado'],
        });
      }
      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (err) {
      console.log(err);
      return res.json(null);
    }
  },

  // Delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(404).json({
          errors: ['Usuário não encontrado'],
        });
      }
      await user.destroy();
      return res.json(null);
    } catch (err) {
      console.log(err);
      return res.json(null);
    }
  },
};
