import jwt from 'jsonwebtoken';
import User from '../models/User';

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        errors: ['Invalid email or password'],
      });
    }
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(403).json({
        errors: ['Invalid email or password'],
      });
    }
    if (!(await user.passwordIsValid(password))) {
      return res.status(403).json({
        errors: ['Invalid email or password'],
      });
    }
    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.json({ token, user: { nome: user.nome, id, email } });
  },
};
