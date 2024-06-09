import express = require('express')
import { Router } from 'express';
import { CreateCourse, DeleteCourseById, FindAllCourses } from '../controllers/courseController';

const coursesRoutes: Router = express.Router();

coursesRoutes.post('/courses', CreateCourse);
coursesRoutes.get('/courses', FindAllCourses);
coursesRoutes.delete('/courses', DeleteCourseById);

export default coursesRoutes;