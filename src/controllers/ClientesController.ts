import { where } from 'sequelize/types';
import Cliente from '../database/models/clientes';

export default class ClientesController{

       public getAll(): Promise<Cliente[]> {
          return Cliente.findAll();
       }

       public getById(id:string):Promise<Cliente | null> {
         return Cliente.findOne({
            where:{
               id:id
               }
                     })
       }

       public delete(id: string):Promise<number>{
          return Cliente.destroy({
            where:{
               id:id
               }
          })
       }

       public save(dados: any): Promise<Cliente>{
          return Cliente.create(dados)
       }

       public update(dados:any, id: string): Promise<[number, Cliente[]]>{
           return Cliente.update(dados,
             {where:{
                 id:id
                }})
       }

}