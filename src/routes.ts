import {Router, Request, Response} from 'express';
import ClientesController from './controllers/ClientesController'

export default class Routes{
  
 #routes: Router;
 #clientesController: ClientesController;

 public constructor(){
    
    this.#routes =  Router();
    this.#clientesController = new ClientesController();
 }
 
 public health(): any {
   return (req: Request, res: Response) =>{
          return res.json('CADASTRO DE CLIENTES');
   }
   
 }

 public getAll(): any{
    return async (req: Request, res: Response)=>{
         const {id} = req.query;
         const clientes = id ? 
                            await this.#clientesController.getById(String(id)) :
                            await this.#clientesController.getAll();
         return res.json(clientes); 
    }
 }

 public save(): any{
   return async (req: Request, res: Response)=>{
      const clientes = await this.#clientesController.save(req.body);
      return res.json(clientes); 
  }
}

public update(): any{
   return async (req: Request, res: Response)=>{
      const {dados, id} = req.body
      const clientes = await this.#clientesController.update(dados, id);
      return res.json(clientes); 
  }
 }

 public delete(): any{
   return async (req: Request, res: Response)=>{
        const {id} = req.query;
        return res.json(await this.#clientesController.delete(String(id))); 
   }
}


 public getRoutes(): Router{
   
    this.#routes.get('/', this.health());
    this.#routes.get('/clientes', this.getAll());
    this.#routes.post('/clientes',this.save());
    this.#routes.delete('/clientes',this.delete());
    this.#routes.put('/clientes',this.update());
    return this.#routes;

 }
}
