import express from 'express';
import { connect } from './utility/connect.utility';
import router from './routers';
import authController from './controllers/auth.controller';
import cors from 'cors'
import path from 'path';
import { authorize } from './middlewares/auth.middleware';

const app = express();
const port = 3000;

app.use(cors())

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(express.json())

app.post('/login', authController.login)
app.use(authorize) 
app.use(router)

app.listen(port, async () => {
  await connect()
  return console.log(`Express is listening at http://localhost:${port}`);
});