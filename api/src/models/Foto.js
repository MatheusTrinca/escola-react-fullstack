import { Model, DataTypes } from 'sequelize';
import appConfig from '../config/appConfig';

class Foto extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Insira uma foto',
            },
          },
        },
        filename: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Insira uma foto',
            },
          },
        },
        url: {
          type: DataTypes.VIRTUAL,
          get() {
            return `${appConfig.url}/images/${this.getDataValue('filename')}`;
          },
        },
      },
      {
        sequelize,
        tableName: 'fotos',
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}

export default Foto;
