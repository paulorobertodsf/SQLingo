import express = require('express')
import { CreateCourse, DeleteCourseById, FindAllCourses } from './controllers/courseController';
import { createConnection } from 'typeorm';
import typeormConfig from '../typeorm.config';

const app = express();

app.use(express.json());

app.post('/courses', CreateCourse);
app.get('/courses', FindAllCourses);
app.delete('/courses', DeleteCourseById)

const PORT = process.env.PORT || 4000;

createConnection(typeormConfig).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Error connecting to database:', error);
});
