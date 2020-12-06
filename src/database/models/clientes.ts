import {DataTypes, Model} from 'sequelize';
import Connection from '../connection';

const connection = new Connection();

export default class Cliente extends Model{}

Cliente.init({
    id:{
        type: DataTypes.UUIDV4,
        autoIncrement: true,
        primaryKey: true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    sobrenome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    dataNascimento:{
        type: DataTypes.DATE,
        allowNull: false
    }
},
{
  sequelize: connection.getConnection(),
  tableName: 'clientes',
  timestamps: false

})