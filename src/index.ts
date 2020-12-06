import express from 'express';
import  'dotenv/config';
import Routes from './routes'


const porta = process.env.PORT; 
const rotas = new Routes().getRoutes();

const app = express();
app.use(express.json())
app.use(rotas);

app.listen(porta, ()=> console.log(`Conectado na porta ${porta}` ));