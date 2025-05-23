import { DataTypes } from 'sequelize'

const UserModel = (sequelize) => {
  sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dni: {
        type: DataTypes.STRING,
        validate: {
          len: [10, 10],
        },
      },
      phone: {
        type: DataTypes.STRING,
        len: [10, 10],
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [6, 50],
            msg: 'Debe tener entre 6 y 50 caracteres.',
          },
        },
      },

      profilePicture: {
        type: DataTypes.STRING,
        validate: {
          isUrl: true,
        },
      },

      gender: {
        type: DataTypes.ENUM,
        values: ['Femenino', 'Masculino', 'Otro'],
      },

      role: {
        type: DataTypes.ENUM,
        values: [
          'Administrador',
          'Gerente',
          'Empleado',
          'Reclutador',
          'Candidato',
        ],
        defaultValue: 'Candidato',
      },

      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      sub: {
        type: DataTypes.STRING,
      },

      address: {
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
    }
  )
}

export default UserModel
