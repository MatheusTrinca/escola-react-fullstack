import { Model, DataTypes } from 'sequelize';
import bcryptjs from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo nome deve ter entre 3 e 255 caracteres',
            },
          },
        },
        email: {
          type: DataTypes.STRING,
          defaultValue: '',
          unique: {
            msg: 'Email já existe',
          },
          validate: {
            isEmail: {
              msg: 'E-mail inválido',
            },
            isUnique(value, next) {
              User.findOne({ where: { email: value } })
                .then((user) => {
                  if (user) {
                    return next('E-mail já existe, tente outro!');
                  }
                  return next();
                })
                .catch((err) => next(err));
            },
          },
        },
        password_hash: {
          type: DataTypes.STRING,
          defaultValue: '',
        },
        password: {
          type: DataTypes.VIRTUAL,
          defaultValue: '',
          validate: {
            len: {
              args: [6, 50],
              msg: 'Senha deve ter no mínimo 6 caracteres',
            },
          },
        },
      },
      { sequelize },
    );
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });
  }

  passwordIsValid(candidatePasswrd) {
    return bcryptjs.compare(candidatePasswrd, this.password_hash);
  }
}

export default User;
