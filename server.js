import express from 'express';
import routes from './routes/public.js'

const app = express();
app.use(express.json())

app.use('/', routes)

app.listen(3001, ()=> console.log("Servidor rodando na porta 3001."));
