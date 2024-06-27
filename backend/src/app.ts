import express = require('express')
import { createConnection } from 'typeorm';
import typeormConfig from '../typeorm.config';
import coursesRoutes from './routes/coursesRoutes';

const app = express();
app.use(express.json());

app.use('/api', coursesRoutes)

const PORT = process.env.PORT || 4000;

createConnection(typeormConfig).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Error connecting to database:', error);
});
