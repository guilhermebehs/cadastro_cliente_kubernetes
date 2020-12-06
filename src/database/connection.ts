import {Sequelize} from 'sequelize';
import  'dotenv/config';


export default class Connection{

    #host: any;
    #port: any;
    #user: any;
    #db: any;
    #password: any;
    
    constructor(){
        this.#host = process.env.DB_HOST;
        this.#password = process.env.DB_PASSWORD;
        this.#user = process.env.DB_USER;
        this.#db = process.env.DB_NAME;
        this.#port = process.env.DB_PORT;

    }

    public getConnection(): Sequelize{

      const con =  new Sequelize (this.#db, this.#user, this.#password, {
          host: this.#host,
          port: this.#port,
          dialect: 'postgres'
      })
     
      return con;
    }

}