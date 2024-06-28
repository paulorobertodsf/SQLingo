import express = require('express')
import { Router } from 'express';
import { CreateQuestion, DeleteQuestionById,FindQuestion, FindAllQuestions } from '../controllers/questionController';

const questionRoutes: Router = express.Router();

questionRoutes.post('/question', CreateQuestion);
questionRoutes.get('/questions', FindAllQuestions);
questionRoutes.get('/question/:id', FindQuestion);
questionRoutes.delete('/question', DeleteQuestionById);

export default questionRoutes;