import dotenv from 'dotenv';
import { resolve } from 'path';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();

import './src/database';

import express from 'express';
import delay from 'express-delay';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import alunoRoutes from './src/routes/alunoRoutes';
import fotoRoutes from './src/routes/fotoRoutes';

const app = express();

const whitelist = ['http://localhost:3000'];

const corsOptions = {
  origin(origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS Policy'));
    }
  },
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(delay(2000));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(resolve(__dirname, 'uploads')));

app.use('/', homeRoutes);
app.use('/users', userRoutes);
app.use('/tokens', tokenRoutes);
app.use('/alunos', alunoRoutes);
app.use('/fotos', fotoRoutes);

export default app;
