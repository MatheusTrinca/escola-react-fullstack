import { Model, DataTypes } from 'sequelize';

class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Digite um valor com no mínimo 3 caracteres',
            },
          },
        },
        sobrenome: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Digite um valor com no mínimo 3 caracteres',
            },
          },
        },
        email: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            isEmail: {
              msg: 'Digite um e-mail válido',
            },
          },
        },
        idade: {
          type: DataTypes.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Digite um número inteiro',
            },
          },
        },
        peso: {
          type: DataTypes.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Digite um número válido',
            },
          },
        },
        altura: {
          type: DataTypes.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Digite um número válido',
            },
          },
        },
      },
      { sequelize },
    );
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}

export default Aluno;
