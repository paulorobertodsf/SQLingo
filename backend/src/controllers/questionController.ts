import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Question } from '../entities/Question';

export const CreateQuestion = async (req: Request, res: Response): Promise<void> => {
  const QuestionRepository = getRepository(Question);
  console.log(req.body)
  const { question, answer } = req.body;
  try {
    const newQuestion = QuestionRepository.create({ question, answer });
    await QuestionRepository.save(newQuestion);
    res.status(201).json({ message: 'Question created successfully', userId: newQuestion.id });
  } catch (error) {
    res.status(500).json({ error: error});
  }
};

export const DeleteQuestionById = async(req: Request, res: Response): Promise<void> => {
  const QuestionRepository = getRepository(Question);
  const { id } = req.body;
  try {
    await QuestionRepository.createQueryBuilder()
                                        .delete()
                                        .from(Question)
                                        .where("id = :id", {id: id})
                                        .execute();
    res.status(201).json({ message: 'Question delete successfully', id: id });
  } catch (error) {
    res.status(500).json({error: error})
  }
}

export const FindQuestion = async (req: Request, res: Response): Promise<void> => {
    const QuestionRepository = getRepository(Question);
    const { id } = req.body
    try {
      const data = await QuestionRepository.findBy({id : id});
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

export const FindAllQuestions = async (_req: Request, res: Response): Promise<void> => {
  const QuestionRepository = getRepository(Question);
  try {
    const data = await QuestionRepository.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}